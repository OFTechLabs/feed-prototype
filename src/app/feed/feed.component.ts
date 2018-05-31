import { Component, OnInit, ViewChild } from '@angular/core';
import { CardDirective } from './card/card.directive';
import { FeedFactory } from './FeedFactory';
import { AppModel } from '../AppModel';
import { WhatsNewAMCardFactory } from './card/assetmanagementcards/whatsnew/WhatsNewAMCardFactory';
import { ProgressCardFactory } from './card/assetmanagementcards/progress-card/ProgressCardFactory';
import { ComplexSessionReminderCardFactory } from './card/assetmanagementcards/reminder/ComplexSessionReminderCardFactory';
import { AMThisQuarterModelFactory } from './card/assetmanagementcards/planning/AMThisQuarterModelFactory';
import { NewsCardFactory } from './card/assetmanagementcards/news-card/NewsCardFactory';
import { AvmChartFeedFactory } from './card/assetmanagementcards/graphcards/ChartFeedFactory';
import { UpdatesCardFactory } from './card/assetmanagementcards/update/UpdatesCardFactory';
import { WarningCardsFactory } from './card/assetmanagementcards/warnings/WarningCardsFactory';
import { CardsState } from './card/CardsState';
import { CardFactory } from './card/CardFactory';
import { CoreHiveMindModule, HiveMindBuilder, IHiveMind, MathHiveMindModule, UnderstoodResponse } from '@oratio/oratio';
import { ASSISTANT_FACTORY } from './card/assetmanagementcards/assistant/AssistantCardFactory';
import { I18nService } from '../i18n/I18nService';
import { SummaryNeuron } from './card/assetmanagementcards/summary/SummaryNeuron';
import { WarningNeuron } from './card/assetmanagementcards/warnings/WarningNeuron';
import { UpdateNeuron } from './card/assetmanagementcards/update/UpdateNeuron';
import { ReminderNeuron } from './card/assetmanagementcards/reminder/ReminderNeuron';
import { MonitorNeuron } from './card/assetmanagementcards/summary/MonitorNeuron';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { UpdateFeedAssistanceResponse } from '../app.action';

@Component({
    selector: 'feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
    @Select(AppState) model$: Observable<AppModel>;

    @ViewChild(CardDirective) cardHost: CardDirective;

    public input: string;
    private mind: IHiveMind;

    constructor(
        public cardsState: CardsState,
        private i18nService: I18nService,
        private store: Store
    ) {
    }

    ngOnInit() {
        this.mind = HiveMindBuilder.createEmpty()
            .registerModule(CoreHiveMindModule.CORE_HIVE_MIND_MODULE)
            .registerModule(MathHiveMindModule.MATH_HIVE_MIND_MODULE)
            .registerNeurons([
                new UpdateNeuron(),
                new WarningNeuron(),
                new ReminderNeuron(),
                new SummaryNeuron(),
                new MonitorNeuron(),
            ]).build();

        this.model$.forEach((newModel: AppModel) => {
            this.cardsState.cardHost = this.cardHost;
            this.loadCards(newModel);
            this.cardsState.updateCards();
        });
    }

    loadCards(model: AppModel) {
        const feedFactory = new FeedFactory<AppModel>([
            new ComplexSessionReminderCardFactory(),
            new AMThisQuarterModelFactory(),
            new ProgressCardFactory(),
            new WhatsNewAMCardFactory(),
            new NewsCardFactory(),
            new UpdatesCardFactory(),
            new AvmChartFeedFactory(),
            new WarningCardsFactory(),
        ]);

        this.cardsState.cards = feedFactory.create(model);
    }


    public queryOratio(model: AppModel): void {
        const result = this.mind.process(this.input, {language: () => 'en', region: () => 'en'}, model);
        result.then(response => {
            const text = response.response();
            if (response instanceof UnderstoodResponse) {
                this.store.dispatch(new UpdateFeedAssistanceResponse(this.i18nService.translate(text, response.params)));
            } else {
                this.store.dispatch(new UpdateFeedAssistanceResponse(this.i18nService.translate(text)));
            }

            this.cardsState.cards = ASSISTANT_FACTORY.create(model).cards;

            response.responses().forEach(answer => {
                if (answer instanceof UnderstoodResponse) {
                    answer.action.call(answer.context, null);
                    const cardFactory = (answer.context as any).cardFactory;
                    const cards = (answer.context as any).cards;
                    if (cardFactory) {
                        this.cardsState.cards = this.cardsState.cards.concat(
                            (cardFactory as CardFactory<AppModel>).create(model).cards
                        );
                    }
                    if (cards) {
                        this.cardsState.cards = this.cardsState.cards.concat(cards);
                    }
                }
            });

            this.cardsState.updateCards();
        });
    }

}

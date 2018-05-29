import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {AssetmanagementAppModelFactory} from './AssetmanagementAppModelFactory';
import {AppModel} from './AppModel';
import {AppModelFactory} from './AppModelFactory';
import {CoreHiveMindModule, HiveMindBuilder, IHiveMind, MathHiveMindModule, UnderstoodResponse} from '@oratio/oratio';
import {I18nService} from './i18n/I18nService';
import {CardsState} from './feed/card/CardsState';
import {ASSISTANT_FACTORY} from './feed/card/assetmanagementcards/assistant/AssistantCardFactory';
import {AssistantComponent} from './feed/card/assetmanagementcards/assistant/assistant.component';
import {CardFactory} from './feed/card/CardFactory';
import {UpdateNeuron} from './feed/card/assetmanagementcards/update/UpdateNeuron';
import {WarningNeuron} from './feed/card/assetmanagementcards/warnings/WarningNeuron';
import {ReminderNeuron} from './feed/card/assetmanagementcards/reminder/ReminderNeuron';
import {SummaryNeuron} from './feed/card/assetmanagementcards/summary/SummaryNeuron';
import {MonitorNeuron} from './feed/card/assetmanagementcards/summary/MonitorNeuron';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => (result.matches as boolean))
        );
    public model: AppModel;
    input: string;
    private mind: IHiveMind;

    constructor(
        private breakpointObserver: BreakpointObserver,
        private i18nService: I18nService,
        private cardState: CardsState) {
    }

    ngOnInit(): void {
        this.model = AssetmanagementAppModelFactory.create();
        this.model.moduleData = AppModelFactory.create();

        this.mind = HiveMindBuilder.createEmpty()
            .registerModule(CoreHiveMindModule.CORE_HIVE_MIND_MODULE)
            .registerModule(MathHiveMindModule.MATH_HIVE_MIND_MODULE)
            .registerNeurons([
                new UpdateNeuron(),
                new WarningNeuron(),
                new ReminderNeuron(),
                new SummaryNeuron(),
                new MonitorNeuron(),
            ])
            .build();
    }

    public queryOratio(): void {
        const result = this.mind.process(this.input, {language: () => 'en', region: () => 'en'}, this.model);
        result.then(response => {
            const text = response.response();
            if (response instanceof UnderstoodResponse) {
                this.model.assistantResponse = this.i18nService.translate(text, response.params);
            } else {
                this.model.assistantResponse = this.i18nService.translate(text);
            }


            this.cardState.cards = ASSISTANT_FACTORY.create(this.model).cards;

            response.responses().forEach(answer => {
                if (answer instanceof UnderstoodResponse) {
                    answer.action.call(answer.context, null);
                    const cardFactory = (answer.context as any).cardFactory;
                    const cards = (answer.context as any).cards;
                    if (cardFactory) {
                        this.cardState.cards = this.cardState.cards.concat(
                            (cardFactory as CardFactory<AppModel>).create(this.model).cards
                        );
                    }
                    if (cards) {
                        this.cardState.cards = this.cardState.cards.concat(cards);
                    }
                }
            });

            this.cardState.updateCards();
        });
    }
}

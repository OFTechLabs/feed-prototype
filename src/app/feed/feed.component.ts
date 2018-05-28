import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {DynamicCard} from './card/DynamicCard';
import {CardDirective} from './card/card.directive';
import {FeedFactory} from './FeedFactory';
import {AppModel} from '../AppModel';
import {CardComponent} from './card/CardComponent';
import {WhatsNewAMCardFactory} from './card/assetmanagementcards/whatsnew/WhatsNewAMCardFactory';
import {ProgressCardFactory} from './card/assetmanagementcards/progress-card/ProgressCardFactory';
import {ComplexSessionReminderCardFactory} from './card/assetmanagementcards/reminder/ComplexSessionReminderCardFactory';
import {AMThisQuarterModelFactory} from './card/assetmanagementcards/planning/AMThisQuarterModelFactory';
import {NewsCardFactory} from './card/assetmanagementcards/news-card/NewsCardFactory';
import {AvmChartFeedFactory} from './card/assetmanagementcards/graphcards/ChartFeedFactory';
import {UpdatesCardFactory} from './card/assetmanagementcards/update/UpdatesCardFactory';
import {WarningCardsFactory} from './card/assetmanagementcards/warnings/WarningCardsFactory';

@Component({
    selector: 'feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

    @ViewChild(CardDirective) cardHost: CardDirective;

    private _model: AppModel;
    cards: DynamicCard[];

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        this.loadCards();
    }

    get model(): AppModel {
        return this._model;
    }

    @Input()
    set model(model: AppModel) {
        this._model = model;
        this.loadCards();
    }

    loadCards() {
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

        this.cards = feedFactory.create(this._model);

        this.cardHost.viewContainerRef.clear();
        this.cards.forEach(card => {
            if (card) {
                const componentFactory = this.componentFactoryResolver.resolveComponentFactory(card.component);
                const viewContainerRef = this.cardHost.viewContainerRef;

                const componentRef = viewContainerRef.createComponent(componentFactory);
                (<CardComponent>componentRef.instance).data = card.data;
                (<CardComponent>componentRef.instance).data.dismiss = () => {
                    componentRef.destroy();
                };
            }
        });
    }
}

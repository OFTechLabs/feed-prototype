import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {DynamicCard} from './card/DynamicCard';
import {CardDirective} from './card/card.directive';
import {FeedFactory} from './FeedFactory';
import {AppModel} from '../AppModel';
import {CardComponent} from './card/CardComponent';
import {AssetmanagementAppModelFactory} from '../AssetmanagementAppModelFactory';
import {WhatsNewAMCardFactory} from './card/assetmanagementcards/whatsnew/WhatsNewAMCardFactory';
import {WhatsNewAVMCardFactory} from './card/assetmanagementcards/whatsnew/WhatsNewAVMCardFactory';
import {ProgressCardFactory} from './card/assetmanagementcards/progress-card/ProgressCardFactory';
import {ProposeVariantCardFactory} from './card/assetmanagementcards/reminder/ProposeVariantCardFactory';
import {ComplexSessionReminderCardFactory} from './card/assetmanagementcards/reminder/ComplexSessionReminderCardFactory';
import {AMThisQuarterModelFactory} from './card/assetmanagementcards/planning/AMThisQuarterModelFactory';
import {NewsCardFactory} from './card/assetmanagementcards/news-card/NewsCardFactory';
import {AVMAppModelFactory} from '../AVMAppModelFactory';
import {AvmChartFeedFactory} from './card/assetmanagementcards/graphcards/AvmChartFeedFactory';

@Component({
    selector: 'feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
    cards: DynamicCard[];
    @ViewChild(CardDirective) cardHost: CardDirective;

    model: AppModel;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        this.model = AssetmanagementAppModelFactory.create();
        this.model.moduleData = AVMAppModelFactory.create();
        this.loadCards();
    }

    loadCards() {
        const feedFactory = new FeedFactory<AppModel>([
            new ComplexSessionReminderCardFactory(),
            new ProposeVariantCardFactory(),
            new AMThisQuarterModelFactory(),
            new ProgressCardFactory(),
            new WhatsNewAMCardFactory(),
            new WhatsNewAVMCardFactory(),
            new NewsCardFactory(),
            new AvmChartFeedFactory(),
        ]);

        this.cards = feedFactory.create(this.model);

        this.cards.forEach(card => {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(card.component);
            const viewContainerRef = this.cardHost.viewContainerRef;

            const componentRef = viewContainerRef.createComponent(componentFactory);
            (<CardComponent>componentRef.instance).data = card.data;
            (<CardComponent>componentRef.instance).data.dismiss = () => {
                componentRef.destroy();
            };
        });
    }
}

import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {DynamicCard} from './card/DynamicCard';
import {CardDirective} from './card/card.directive';
import {FeedFactory} from './FeedFactory';
import {ComplexesAnalyzedCardFactory} from './card/assetmanagementcards/complexesanalyzedcard/ComplexesAnalyzedCardFactory';
import {AppModel} from '../AppModel';
import {CardComponent} from './card/CardComponent';
import {AssetmanagementAppModelFactory} from '../AssetmanagementAppModelFactory';
import {WhatsNewAMCardFactory} from './card/assetmanagementcards/whatsnew/WhatsNewAMCardFactory';
import {WhatsNewAVMCardFactory} from './card/assetmanagementcards/whatsnew/WhatsNewAVMCardFactory';
import { ProgressCardFactory } from './card/assetmanagementcards/progress-card/ProgressCardFactory';
import {PieChartCardFactory} from './card/assetmanagementcards/graphcards/piecharts/PieChartCardFactory';
import {LineChartCardFactory} from './card/assetmanagementcards/graphcards/linechart/LineChartCardFactory';
import {BarChartCardFactory} from './card/assetmanagementcards/graphcards/barchart/BarChartCardFactory';
import {DoughnutChartCardFactory} from './card/assetmanagementcards/graphcards/doughnutchart/DoughnutChartCardFactory';
import {RadarChartCardFactory} from './card/assetmanagementcards/graphcards/radarchart/RadarChartCardFactory';
import {PolarChartComponent} from './card/assetmanagementcards/graphcards/polarchart/polarchart.component';
import {PolarChartCardFactory} from './card/assetmanagementcards/graphcards/polarchart/PolarChartCardFactory';


@Component({
    selector: 'feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
    cards: DynamicCard[];
    @ViewChild(CardDirective) cardHost: CardDirective;

    model: AppModel;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        this.model = AssetmanagementAppModelFactory.create();
        this.loadCards();
    }

    loadCards() {
        const feedFactory = new FeedFactory<AppModel>([
            new ComplexesAnalyzedCardFactory(),
            new ProgressCardFactory(),
            new WhatsNewAMCardFactory(),
            new WhatsNewAVMCardFactory(),
            new PieChartCardFactory(),
            new LineChartCardFactory(),
            new BarChartCardFactory(),
            new DoughnutChartCardFactory(),
            new RadarChartCardFactory(),
            new PolarChartCardFactory(),
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

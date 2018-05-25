import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {DynamicCard} from './card/DynamicCard';
import {CardDirective} from './card/card.directive';
import {FeedFactory} from './FeedFactory';
import {ComplexesAnalyzedCardFactory} from './card/assetmanagementcards/complexesanalyzedcard/ComplexesAnalyzedCardFactory';
import {AppModel} from '../AppModel';
import {CardComponent} from './card/CardComponent';
import {AssetmanagementAppModelFactory} from '../AssetmanagementAppModelFactory';
import { ProgressCardFactory } from './card/assetmanagementcards/progress-card/ProgressCardFactory';

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
            new ProgressCardFactory()
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

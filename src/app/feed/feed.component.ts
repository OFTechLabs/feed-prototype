import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {DynamicCard} from './card/DynamicCard';
import {CardDirective} from './card/card.directive';
import {FeedFactory} from './FeedFactory';
import {ComplexesAnalyzedCardFactory} from './card/assetmanagementcards/complexesanalyzedcard/ComplexesAnalyzedCardFactory';
import {AppModel} from '../AppModel';
import {CardComponent} from './card/CardComponent';

@Component({
    selector: 'feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
    cards: DynamicCard[];
    @ViewChild(CardDirective) cardHost: CardDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        this.loadCards();
    }

    loadCards() {
        const feedFactory = new FeedFactory<AppModel>([
            new ComplexesAnalyzedCardFactory(),
            new ComplexesAnalyzedCardFactory(),
            new ComplexesAnalyzedCardFactory(),
        ]);

        this.cards = feedFactory.create(new AppModel());

        this.cards.forEach(card => {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(card.component);
            const viewContainerRef = this.cardHost.viewContainerRef;

            const componentRef = viewContainerRef.createComponent(componentFactory);
            (<CardComponent>componentRef.instance).data = card.data;
        });
    }
}

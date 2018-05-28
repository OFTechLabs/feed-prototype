import {ComponentFactoryResolver, Injectable} from '@angular/core';
import {DynamicCard} from './DynamicCard';
import {CardComponent} from './CardComponent';
import {CardDirective} from './card.directive';

@Injectable()
export class CardsState {

    public cards: DynamicCard[];
    public cardHost: CardDirective;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
    ) {
        this.cards = [];
    }

    updateCards() {
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

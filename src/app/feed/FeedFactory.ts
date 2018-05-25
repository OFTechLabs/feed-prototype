import {CardFactory} from './card/CardFactory';
import {DynamicCard} from './card/DynamicCard';

export class FeedFactory<MODEL> {

    private cardFactories: CardFactory<MODEL>[];

    constructor(cardFactories: CardFactory<MODEL>[]) {
        this.cardFactories = cardFactories;
    }

    public create(model: MODEL): DynamicCard[] {
        return this.cardFactories.map(factory => factory.create(model))
            .filter(response => response)
            .map(response => response.cards)
            .reduce((left, right) => left.concat(right), [])
            .sort((a, b) => a.relevance - b.relevance);
    }
}

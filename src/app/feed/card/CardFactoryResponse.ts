import {DynamicCard} from './DynamicCard';

export class CardFactoryResponse {

    constructor(cards: DynamicCard[]) {
        this._cards = cards;
    }

    private _cards: DynamicCard[];

    get cards(): DynamicCard[] {
        return this._cards;
    }
}

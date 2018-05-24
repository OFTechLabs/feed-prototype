import {DynamicCard} from './DynamicCard';

export class CardFactoryResponse {

    constructor(hasCard: boolean, card: DynamicCard) {
        this._hasCard = hasCard;
        this._card = card;
    }

    private _hasCard: boolean;

    get hasCard(): boolean {
        return this._hasCard;
    }

    private _card: DynamicCard;

    get card(): DynamicCard {
        return this._card;
    }
}

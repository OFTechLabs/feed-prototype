import {CardFactoryResponse} from './CardFactoryResponse';

export interface CardFactory<MODEL> {

    create(model: MODEL): CardFactoryResponse;
}

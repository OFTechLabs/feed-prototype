import {Type} from '@angular/core';

export class DynamicCard {
    constructor(
        private _component: Type<any>,
        private _relevance: number,
        public data: any) {
    }

    get relevance(): number {
        return this._relevance;
    }

    get component(): Type<any> {
        return this._component;
    }
}

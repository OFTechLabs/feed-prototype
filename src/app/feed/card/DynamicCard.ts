import {Type} from '@angular/core';

export class DynamicCard {
    constructor(private _component: Type<any>, public data: any) {
    }

    get component(): Type<any> {
        return this._component;
    }
}

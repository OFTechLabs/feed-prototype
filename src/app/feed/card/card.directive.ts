import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[feedcard]',
})
export class CardDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}

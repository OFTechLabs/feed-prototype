import {Component, Input} from '@angular/core';
import {CardComponent} from '../../CardComponent';

@Component({
    templateUrl: './complexes-analyzed.component.html',
})
export class ComplexesAnalyzedComponent implements CardComponent {
    @Input() data: any;
}


import {Component, Input} from '@angular/core';
import {CardComponent} from '../../CardComponent';
import {ThisQuarterModel} from './ThisQuarterModel';

@Component({
    templateUrl: './this-quarter.component.html',
    styleUrls: ['./this-quarter.component.css']
})
export class ThisQuarterComponent implements CardComponent {
    @Input() data: ThisQuarterModel;
}


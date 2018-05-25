import {Component, Input} from '@angular/core';
import {CardComponent} from '../../CardComponent';
import {ReminderModel} from './ReminderModel';

@Component({
    templateUrl: './reminder.component.html',
})
export class ReminderComponent implements CardComponent {
    @Input() data: ReminderModel;
}


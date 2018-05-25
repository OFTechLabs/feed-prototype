import {Component, Input} from '@angular/core';
import {CardComponent} from '../../CardComponent';
import {ReminderModel} from './ReminderModel';

@Component({
    templateUrl: './reminder.component.html',
    styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements CardComponent {
    @Input() data: ReminderModel;
}


import {Component, Input} from '@angular/core';
import {CardComponent} from '../../CardComponent';

@Component({
    templateUrl: './warning.component.html',
    styleUrls: ['./warning.component.scss'],
})
export class WarningComponent implements CardComponent {
    @Input() data: {
        title: string,
        description: string,
        actions: string[],
        dismiss: () => void;
    };
}


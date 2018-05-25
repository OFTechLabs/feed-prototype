import {Component, Input} from '@angular/core';
import {CardComponent} from '../../CardComponent';

@Component({
    templateUrl: './whats-new.component.html',
    styleUrls: ['./whats-new.component.scss'],
})
export class WhatsNewComponent implements CardComponent {
    @Input() data: {
        title: string,
        description: string,
        url: string,
        actions: string[],
        dismiss: () => void;
    };
}


import { Component, Input } from '@angular/core';
import { CardComponent } from '../../CardComponent';

@Component({
    selector: 'app-assistant-card',
    templateUrl: './assistant.component.html',
    styleUrls: ['./assistant.component.scss']
})
export class AssistantComponent implements CardComponent {
    @Input() data: any;
}

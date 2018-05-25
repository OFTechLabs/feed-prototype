import { Component, Input } from '@angular/core';
import { CardComponent } from '../../CardComponent';

@Component({
    selector: 'app-update-card',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements CardComponent {
    @Input() data: any;
}

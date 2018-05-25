import { Component, Input } from '@angular/core';
import { CardComponent } from '../../CardComponent';

@Component({
    selector: 'app-news-card',
    templateUrl: './news-card.component.html',
    styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements CardComponent {
    @Input() data: any;
}

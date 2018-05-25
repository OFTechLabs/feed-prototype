import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../../CardComponent';

@Component({
    selector: 'app-progress-card',
    templateUrl: './progress-card.component.html',
    styleUrls: ['./progress-card.component.scss']
})
export class ProgressCardComponent implements CardComponent, OnInit {
    @Input() data: any;

    public progress: number;

    ngOnInit() {
        this.progress = (this.data.progressValue / this.data.totalValue) * 100;
    }
}

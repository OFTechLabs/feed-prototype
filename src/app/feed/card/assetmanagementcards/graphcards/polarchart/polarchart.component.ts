import {Component, Input} from '@angular/core';
import {CardComponent} from '../../../CardComponent';

@Component({
    templateUrl: './polarchart.component.html',
})

export class PolarChartComponent implements CardComponent {

    @Input() data: {
        title: string,
        ChartLabels: string[],
        ChartData: any[],
        Legend: boolean,
        ChartType: string
    };

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}


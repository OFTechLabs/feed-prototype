import {Component, Input} from '@angular/core';
import {CardComponent} from '../../../CardComponent';

@Component({
    templateUrl: './doughnutchart.component.html',
})

export class DoughnutChartComponent implements CardComponent {

    @Input() data: {
        title: string,
        ChartLabels: string[],
        ChartData: any[],
        ChartType: string,
        ChartOptions: any,
    };

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}



import {Component, Input} from '@angular/core';
import {CardComponent} from '../../../CardComponent';

@Component({
    templateUrl: './linechart.component.html',
})

export class LineChartComponent implements CardComponent {

    @Input() data: {
        title: string,
        lineChartLabels: Array<any>,
        lineChartData: Array<any>,
        lineChartOptions: any,
        lineChartColors: Array<any>,
        lineChartLegend: boolean,
        lineChartType: string
    };

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}



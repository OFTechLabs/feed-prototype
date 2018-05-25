import {Component, Input} from '@angular/core';
import {CardComponent} from '../../../CardComponent';

@Component({
    templateUrl: './arraychart.component.html',
})

export class ArrayChartComponent implements CardComponent {

    @Input() data: {
        title: string,
        ChartLabels: any[],
        ChartData: any[],
        ChartType: string,
        ChartLegend: boolean,
        ChartDataArray: any[];
        dismiss: () => {},
    };

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}



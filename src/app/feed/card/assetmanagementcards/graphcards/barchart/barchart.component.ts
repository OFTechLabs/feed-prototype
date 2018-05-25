import {Component, Input} from '@angular/core';
import {CardComponent} from '../../../CardComponent';

@Component({
    templateUrl: './barchart.component.html',
})

export class BarChartComponent implements CardComponent {

    @Input() data: {
        title: string,
        barChartLabels: string[],
        barChartData: any[],
        barChartType: string,
        barChartLegend: boolean,
        barChartOptions: any,
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



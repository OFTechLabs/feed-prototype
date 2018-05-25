import {Component, Input} from '@angular/core';
import {CardComponent} from '../../../CardComponent';

@Component({
    templateUrl: './radarchart.component.html',
})

export class RadarChartComponent implements CardComponent {

    @Input() data: {
        title: string,
        ChartLabels: string[],
        ChartData: any[],
        ChartType: string,
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



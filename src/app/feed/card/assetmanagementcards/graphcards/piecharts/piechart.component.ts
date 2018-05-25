import {Component, Input} from '@angular/core';
import {CardComponent} from '../../../CardComponent';

@Component({
    templateUrl: './piechart.component.html',
})

export class PieChartComponent implements CardComponent {

    @Input() data: {
        title: string,
        pieChartLabels: string[],
        pieChartData: number[],
        pieChartType: string,
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



export class ChartDataArray {
    constructor(public title: string,
                public ChartLabels: string[],
                public ChartDataArray: { data: number[]; label: string }[],
                public ChartType: string,
                public ChartLegend: boolean) {
    }
}

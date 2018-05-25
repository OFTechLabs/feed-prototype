import {ChartDataArray, ModuleDataSet} from './AppModel';

export class AVMAppModelFactory {

    public static create(): ModuleDataSet {
        return new ModuleDataSet(
            'AVM',
            [new ChartDataArray('Bar Chart', ['2006', '2007', '2008', '2009', '2010', '2011', '2012'], [
                    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
                    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
                ],
                'bar', true)
                , new ChartDataArray('Line Chart', ['January', 'February', 'March', 'April', 'May', 'June', 'July'], [
                    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
                    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
                    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
                ],
                'line', true)
                , new ChartDataArray('Radar Chart', ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'], [
                    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
                    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
                ],
                'radar', true)
                , new ChartDataArray('Pie Chart', ['Analyzed Complexes', 'Total Complexes'], [
                    {data: [100, 80], label: 'Series A'}
                ],
                'pie', true)
                , new ChartDataArray('Doughnut Chart', ['Analyzed Complexes', 'Total Complexes'], [
                    {data: [100, 80], label: 'Series A'}
                ],
                'doughnut', true)
                , new ChartDataArray('Polar Area Chart', ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'], [
                    {data: [300, 500, 100, 40, 120], label: 'Series A'}
                ],
                'polarArea', true)]
        );
    }
}

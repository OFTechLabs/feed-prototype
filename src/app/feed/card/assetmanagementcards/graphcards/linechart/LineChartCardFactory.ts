import {AppModel} from '../../../../../AppModel';
import {CardFactoryResponse} from '../../../CardFactoryResponse';
import {DynamicCard} from '../../../DynamicCard';
import {LineChartComponent} from './linechart.component';
import {AppAuthorizationUtil} from '../../../../../AppAuthorizationUtil';
import {CardFactory} from '../../../CardFactory';

export class LineChartCardFactory implements CardFactory<AppModel> {
    create(model: AppModel): CardFactoryResponse {
        if (AppAuthorizationUtil.hasModule(model, 'AM')
            && AppAuthorizationUtil.hasRole(model, 'Assetmanager')) {
            const analyzedComplexes = model.complexes.filter(complex => complex.isAnalyzed).length;

            return new CardFactoryResponse(
                [new DynamicCard(LineChartComponent,
                    {
                        title: 'Line Chart',
                        lineChartLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        lineChartData: [
                            {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
                            {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
                            {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
                        ],
                        lineChartOptions: {
                            responsive: true
                        },
                        lineChartColors: [
                            { // grey
                                backgroundColor: 'rgba(148,159,177,0.2)',
                                borderColor: 'rgba(148,159,177,1)',
                                pointBackgroundColor: 'rgba(148,159,177,1)',
                                pointBorderColor: '#fff',
                                pointHoverBackgroundColor: '#fff',
                                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
                            },
                            { // dark grey
                                backgroundColor: 'rgba(77,83,96,0.2)',
                                borderColor: 'rgba(77,83,96,1)',
                                pointBackgroundColor: 'rgba(77,83,96,1)',
                                pointBorderColor: '#fff',
                                pointHoverBackgroundColor: '#fff',
                                pointHoverBorderColor: 'rgba(77,83,96,1)'
                            },
                            { // grey
                                backgroundColor: 'rgba(148,159,177,0.2)',
                                borderColor: 'rgba(148,159,177,1)',
                                pointBackgroundColor: 'rgba(148,159,177,1)',
                                pointBorderColor: '#fff',
                                pointHoverBackgroundColor: '#fff',
                                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
                            }
                        ],
                        lineChartLegend: true,
                        lineChartType: 'line'
                    })]);
        }

        return new CardFactoryResponse(
            []
        );
    }
}

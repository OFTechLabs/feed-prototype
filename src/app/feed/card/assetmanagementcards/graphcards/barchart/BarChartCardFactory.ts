import {AppModel} from '../../../../../AppModel';
import {CardFactoryResponse} from '../../../CardFactoryResponse';
import {DynamicCard} from '../../../DynamicCard';
import {BarChartComponent} from './barchart.component';
import {AppAuthorizationUtil} from '../../../../../AppAuthorizationUtil';
import {CardFactory} from '../../../CardFactory';

export class BarChartCardFactory implements CardFactory<AppModel> {
    create(model: AppModel): CardFactoryResponse {
        if (AppAuthorizationUtil.hasModule(model, 'AM')
            && AppAuthorizationUtil.hasRole(model, 'Assetmanager')) {
            return new CardFactoryResponse(
                [new DynamicCard(BarChartComponent,
                    {
                        title: 'Bar Chart',
                        barChartLabels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
                        barChartData: [
                            {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
                            {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
                        ],
                        barChartType: 'bar',
                        barChartLegend: true
                    })]);
        }

        return new CardFactoryResponse(
            []
        );
    }
}

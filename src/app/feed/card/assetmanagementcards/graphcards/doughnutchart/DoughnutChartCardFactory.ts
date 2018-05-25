import {AppModel} from '../../../../../AppModel';
import {CardFactoryResponse} from '../../../CardFactoryResponse';
import {DynamicCard} from '../../../DynamicCard';
import {DoughnutChartComponent} from './doughnutchart.component';
import {AppAuthorizationUtil} from '../../../../../AppAuthorizationUtil';
import {CardFactory} from '../../../CardFactory';

export class DoughnutChartCardFactory implements CardFactory<AppModel> {
    create(model: AppModel): CardFactoryResponse {
        if (AppAuthorizationUtil.hasModule(model, 'AM')
            && AppAuthorizationUtil.hasRole(model, 'Assetmanager')) {
            const analyzedComplexes = model.complexes.filter(complex => complex.isAnalyzed).length;

            return new CardFactoryResponse(
                true,
                new DynamicCard(DoughnutChartComponent,
                    {
                        title: 'Doughnut Chart',
                        ChartLabels: ['Analyzed Complexes', 'Total Complexes'],
                        ChartData: [analyzedComplexes, model.complexes.length],
                        ChartType: 'doughnut'
                    }));
        }

        return new CardFactoryResponse(
            false,
            null
        );
    }
}

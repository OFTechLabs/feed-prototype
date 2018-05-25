import {AppModel} from '../../../../../AppModel';
import {CardFactoryResponse} from '../../../CardFactoryResponse';
import {DynamicCard} from '../../../DynamicCard';
import {PieChartComponent} from './piechart.component';
import {AppAuthorizationUtil} from '../../../../../AppAuthorizationUtil';
import {CardFactory} from '../../../CardFactory';

export class PieChartCardFactory implements CardFactory<AppModel> {
    create(model: AppModel): CardFactoryResponse {
        if (AppAuthorizationUtil.hasModule(model, 'AM')
            && AppAuthorizationUtil.hasRole(model, 'Assetmanager')) {
            const analyzedComplexes = model.complexes.filter(complex => complex.isAnalyzed).length;

            return new CardFactoryResponse(
                true,
                new DynamicCard(PieChartComponent,
                    {
                        title: 'Pie Chart',
                        pieChartLabels: ['Analyzed Complexes', 'Total Complexes'],
                        pieChartData: [analyzedComplexes, model.complexes.length],
                        pieChartType: 'pie'
                    }));
        }

        return new CardFactoryResponse(
            false,
            null
        );
    }
}

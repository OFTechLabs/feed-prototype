import {AppModel} from '../../../../../AppModel';
import {CardFactoryResponse} from '../../../CardFactoryResponse';
import {DynamicCard} from '../../../DynamicCard';
import {PolarChartComponent} from './polarchart.component';
import {AppAuthorizationUtil} from '../../../../../AppAuthorizationUtil';
import {CardFactory} from '../../../CardFactory';

export class PolarChartCardFactory implements CardFactory<AppModel> {
    create(model: AppModel): CardFactoryResponse {
        if (AppAuthorizationUtil.hasModule(model, 'AM')
            && AppAuthorizationUtil.hasRole(model, 'Assetmanager')) {
            const analyzedComplexes = model.complexes.filter(complex => complex.isAnalyzed).length;

            return new CardFactoryResponse(
                [new DynamicCard(PolarChartComponent,
                    {
                        title: 'Polar Chart',
                        ChartLabels: ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'],
                        ChartData: [300, 500, 100, 40, 120],
                        Legend: true,
                        ChartType: 'polarArea'
                    })]);
        }

        return new CardFactoryResponse(
            []
        );
    }
}

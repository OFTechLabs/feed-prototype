import {AppModel} from '../../../../../AppModel';
import {CardFactoryResponse} from '../../../CardFactoryResponse';
import {DynamicCard} from '../../../DynamicCard';
import {RadarChartComponent} from './radarchart.component';
import {AppAuthorizationUtil} from '../../../../../AppAuthorizationUtil';
import {CardFactory} from '../../../CardFactory';

export class RadarChartCardFactory implements CardFactory<AppModel> {
    create(model: AppModel): CardFactoryResponse {
        if (AppAuthorizationUtil.hasModule(model, 'AM')
            && AppAuthorizationUtil.hasRole(model, 'Assetmanager')) {
            const analyzedComplexes = model.complexes.filter(complex => complex.isAnalyzed).length;

            return new CardFactoryResponse(
                [new DynamicCard(RadarChartComponent,
                    {
                        title: 'Radar Chart',
                        ChartLabels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                        ChartData: [
                            {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
                            {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
                        ],
                        ChartType: 'radar'
                    })]);
        }

        return new CardFactoryResponse(
            []
        );
    }
}

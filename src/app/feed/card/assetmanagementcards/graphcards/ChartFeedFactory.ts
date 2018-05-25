import {AppModel} from '../../../../AppModel';
import {AppAuthorizationUtil} from '../../../../AppAuthorizationUtil';
import {DynamicCard} from '../../DynamicCard';
import {CardFactoryResponse} from '../../CardFactoryResponse';
import {ArrayChartComponent} from './arraycharts/arraychart.component';
import {CardFactory} from '../../CardFactory';

export class AvmChartFeedFactory implements CardFactory<AppModel> {
    create(model: AppModel): CardFactoryResponse {
        if (AppAuthorizationUtil.hasModule(model, 'AVM')
            && AppAuthorizationUtil.hasRole(model, 'Taxationmanager')) {

            const cards = model.moduleData.map(entry => entry.ArrayChartDataSet.map(dataPoint => {
                return new DynamicCard(
                    ArrayChartComponent,
                    dataPoint
                );
            })).reduce((left, right) => left.concat(right), []);
            return new CardFactoryResponse(cards);
        }

        return new CardFactoryResponse(
            []
        );
    }
}

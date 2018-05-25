import {AppModel} from '../../../../AppModel';
import {AppAuthorizationUtil} from '../../../../AppAuthorizationUtil';
import {DynamicCard} from '../../DynamicCard';
import {CardFactoryResponse} from '../../CardFactoryResponse';
import {BarChartComponent} from './barchart/barchart.component';

export class AvmChartFeedFactory {
    create(model: AppModel): CardFactoryResponse {
        if (AppAuthorizationUtil.hasModule(model, 'AVM')
            && AppAuthorizationUtil.hasRole(model, 'Taxationmanager')) {

            const cards = model.avmData.map(dataPoint => {
                return new DynamicCard(
                    BarChartComponent,
                    dataPoint
                );
            });

            return new CardFactoryResponse(cards);
        }

        return new CardFactoryResponse(
            []
        );
    }
}

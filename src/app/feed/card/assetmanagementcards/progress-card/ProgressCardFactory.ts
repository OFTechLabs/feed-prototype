import {AppModel} from '../../../../AppModel';
import {DynamicCard} from '../../DynamicCard';
import {CardFactoryResponse} from '../../CardFactoryResponse';
import {AppAuthorizationUtil} from '../../../../AppAuthorizationUtil';
import {CardFactory} from '../../CardFactory';
import {ProgressCardComponent} from './progress-card.component';

export class ProgressCardFactory implements CardFactory<AppModel> {
    create(model: AppModel): CardFactoryResponse {
        if (AppAuthorizationUtil.hasModule(model, 'AVM')
            && AppAuthorizationUtil.hasRole(model, 'Taxationmanager')) {

            const cards = model.moduleData.map(entry => entry.ProgressDataSet.map(dataPoint => {
                return new DynamicCard(
                    ProgressCardComponent,
                    Math.round(Math.random() * 100),
                    dataPoint
                );
            })).reduce((left, right) => left.concat(right), []);
            return new CardFactoryResponse(cards);
        }

        return new CardFactoryResponse([]);
    }
}

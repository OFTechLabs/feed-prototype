import {AppModel} from '../../../../AppModel';
import {DynamicCard} from '../../DynamicCard';
import {CardFactoryResponse} from '../../CardFactoryResponse';
import {CardFactory} from '../../CardFactory';
import {ProgressCardComponent} from './progress-card.component';
import {AppAuthorizationUtil} from '../../../../AppAuthorizationUtil';

export class ProgressCardFactory implements CardFactory<AppModel> {
    create(model: AppModel): CardFactoryResponse {
        const cards = [];

        model.moduleData.forEach(entry => entry.ProgressDataSet.forEach(dataPoint => {
            if (AppAuthorizationUtil.hasRole(model, dataPoint.role)) {
                cards.push(new DynamicCard(
                    ProgressCardComponent,
                    Math.round(Math.random() * 100),
                    dataPoint
                ));
            }
        }));

        return new CardFactoryResponse(cards);
    }
}

import {AppModel} from '../../../../AppModel';
import {CardFactory} from '../../CardFactory';
import {CardFactoryResponse} from '../../CardFactoryResponse';
import {DynamicCard} from '../../DynamicCard';
import {WhatsNewComponent} from './whats-new.component';
import {AppAuthorizationUtil} from '../../../../AppAuthorizationUtil';

export class WhatsNewAMCardFactory implements CardFactory<AppModel> {
    create(model: AppModel): CardFactoryResponse {
        const cards = model.moduleData.map(entry => entry.WhatsNewSet
            .filter(dataPoint => AppAuthorizationUtil.hasRoles(model, dataPoint.role))
            .map(dataPoint => {
                return new DynamicCard(
                    WhatsNewComponent,
                    3,
                    dataPoint,
                );
            })).reduce((left, right) => left.concat(right), []);
        return new CardFactoryResponse(cards);
    }
}

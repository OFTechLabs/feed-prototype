import {AppModel} from '../../../../AppModel';
import {CardFactory} from '../../CardFactory';
import {CardFactoryResponse} from '../../CardFactoryResponse';
import {DynamicCard} from '../../DynamicCard';
import {AppAuthorizationUtil} from '../../../../AppAuthorizationUtil';
import {WhatsNewComponent} from './whats-new.component';

export class WhatsNewAMCardFactory implements CardFactory<AppModel> {
    create(model: AppModel): CardFactoryResponse {
        if (AppAuthorizationUtil.hasModule(model, 'AM')
            && AppAuthorizationUtil.hasRole(model, 'Assetmanager')) {

            const cards = model.moduleData.map(entry => entry.WhatsNewSet
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
}

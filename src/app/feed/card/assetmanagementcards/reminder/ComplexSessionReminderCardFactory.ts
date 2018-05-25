import {AppModel} from '../../../../AppModel';
import {AppAuthorizationUtil} from '../../../../AppAuthorizationUtil';
import {DynamicCard} from '../../DynamicCard';
import {ReminderComponent} from './reminder.component';
import {CardFactoryResponse} from '../../CardFactoryResponse';
import {CardFactory} from '../../CardFactory';

export class ComplexSessionReminderCardFactory implements CardFactory<AppModel> {

    create(model: AppModel): CardFactoryResponse {
        if (AppAuthorizationUtil.hasModule(model, 'AM')
            && AppAuthorizationUtil.hasRole(model, 'Assetmanager')) {

            const cards = model.moduleData.map(entry => entry.ReminderSet
                .map(dataPoint => {
                    return new DynamicCard(
                        ReminderComponent,
                        3,
                        dataPoint,
                    );
                })).reduce((left, right) => left.concat(right), []);
            return new CardFactoryResponse(cards);
        }
    }
}

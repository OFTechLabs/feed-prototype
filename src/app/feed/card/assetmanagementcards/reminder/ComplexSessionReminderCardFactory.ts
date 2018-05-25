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
            return new CardFactoryResponse(
                [new DynamicCard(ReminderComponent,
                    {
                        title: 'Complex Session ' + model.complexes[12].complexName,
                        description: 'Complex ' + model.complexes[12].complexName + ' has a complex session coming up. Make sure all preparations are done.',
                        daysLeft: 3,
                        actions: ['Go to ' + model.complexes[12].complexName],
                        dismiss: () => {}
                    })]);
        }

        return new CardFactoryResponse(
            []
        );
    }
}

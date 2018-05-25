import {AppModel} from '../../../../AppModel';
import {AppAuthorizationUtil} from '../../../../AppAuthorizationUtil';
import {DynamicCard} from '../../DynamicCard';
import {CardFactoryResponse} from '../../CardFactoryResponse';
import {ReminderComponent} from './reminder.component';

export class ProposeVariantCardFactory {
    create(model: AppModel): CardFactoryResponse {
        if (AppAuthorizationUtil.hasModule(model, 'AM')
            && AppAuthorizationUtil.hasRole(model, 'Assetmanager')) {
            return new CardFactoryResponse(
                [new DynamicCard(ReminderComponent,
                    {
                        title: 'Policy Proposal',
                        description: 'A proposed variant is required to finalize the policy for this year',
                        daysLeft: 21,
                        actions: ['Go to AM', 'Propose a Variant']
                    })]);
        }

        return new CardFactoryResponse(
            []
        );
    }

}

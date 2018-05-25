import {AppModel} from '../../../../AppModel';
import {AppAuthorizationUtil} from '../../../../AppAuthorizationUtil';
import {DynamicCard} from '../../DynamicCard';
import {CardFactoryResponse} from '../../CardFactoryResponse';
import {ReminderComponent} from './reminder.component';
import {CardFactory} from '../../CardFactory';

export class ProposeVariantCardFactory implements CardFactory<AppModel> {
    create(model: AppModel): CardFactoryResponse {
        if (AppAuthorizationUtil.hasModule(model, 'AM')
            && AppAuthorizationUtil.hasRole(model, 'Assetmanager')) {
            return new CardFactoryResponse(
                [new DynamicCard(
                    ReminderComponent,
                    Math.round(Math.random() * 100),
                    {
                        title: 'Policy Proposal',
                        description: 'A proposed variant is required to finalize the policy for this year',
                        daysLeft: 21,
                        actions: ['Propose a Variant'],
                        dismiss: () => {}
                    })]);
        }

        return new CardFactoryResponse(
            []
        );
    }

}

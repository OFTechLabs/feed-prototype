import {WhatsNewComponent} from './whats-new.component';
import {AppModel} from '../../../../AppModel';
import {AppAuthorizationUtil} from '../../../../AppAuthorizationUtil';
import {DynamicCard} from '../../DynamicCard';
import {CardFactoryResponse} from '../../CardFactoryResponse';

export class WhatsNewAVMCardFactory {

    create(model: AppModel): CardFactoryResponse {
        if (AppAuthorizationUtil.hasModule(model, 'AVM')
            && AppAuthorizationUtil.hasRole(model, 'Taxationmanager')) {

            return new CardFactoryResponse(
                true,
                new DynamicCard(WhatsNewComponent,
                    {
                        title: 'AVM 2018.9',
                        description: 'New version of AVM is available! The new features can be seen in the demo below. AVM now has a dashboard with the most relevant information about your properties.',
                        url: 'https://www.youtube.com/embed/LD9Oaj0B5Cc',
                        actions: ['Go to AVM', 'Go to Dashboard']
                    }));
        }

        return new CardFactoryResponse(
            false,
            null
        );
    }
}

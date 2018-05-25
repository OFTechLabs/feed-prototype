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
            return new CardFactoryResponse(
                true,
                new DynamicCard(WhatsNewComponent,
                    {
                        title: 'AM 2018.9',
                        description: 'New version of AM is available! The new features can be seen in the demo below. It is now possible to use newlybuilt.',
                        url: 'https://www.youtube.com/embed/LD9Oaj0B5Cc',
                        actions: ['Go to AM', 'Go to Newlybuilt']
                    }));
        }

        return new CardFactoryResponse(
            false,
            null
        );
    }
}

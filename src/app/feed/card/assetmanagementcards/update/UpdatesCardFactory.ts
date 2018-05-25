import {AppModel} from '../../../../AppModel';
import {AppAuthorizationUtil} from '../../../../AppAuthorizationUtil';
import {DynamicCard} from '../../DynamicCard';
import {CardFactoryResponse} from '../../CardFactoryResponse';
import {CardFactory} from '../../CardFactory';
import {UpdateComponent} from './update.component';

export class UpdatesCardFactory implements CardFactory<AppModel> {

    create(model: AppModel): CardFactoryResponse {
        const cards = [];
        model.updates.forEach(update => {
            if (AppAuthorizationUtil.hasModule(model, update.module)
                && AppAuthorizationUtil.hasRoles(model, update.roles)) {
                cards.push(new DynamicCard(
                    UpdateComponent,
                    {
                        title: update.title,
                        update: update.description,
                        dismiss: () => {
                        }
                    }));
            }
        });
        return new CardFactoryResponse(
            cards
        );
    }
}

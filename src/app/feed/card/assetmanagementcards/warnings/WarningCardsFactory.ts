import {AppModel} from '../../../../AppModel';
import {CardFactoryResponse} from '../../CardFactoryResponse';
import {AppAuthorizationUtil} from '../../../../AppAuthorizationUtil';
import {DynamicCard} from '../../DynamicCard';
import {WarningComponent} from './warning.component';

export class WarningCardsFactory {

    create(model: AppModel): CardFactoryResponse {
        const cards = [];
        model.warnings.forEach(warning => {
            if (AppAuthorizationUtil.hasModule(model, warning.module)
                && AppAuthorizationUtil.hasRoles(model, warning.roles)) {
                cards.push(new DynamicCard(
                    WarningComponent,
                    0,
                    {
                        title: warning.title,
                        description: warning.description,
                        actions: warning.actions,
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

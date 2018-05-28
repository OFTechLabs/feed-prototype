import {AppModel} from '../../../../AppModel';
import {DynamicCard} from '../../DynamicCard';
import {CardFactory} from '../../CardFactory';
import {CardFactoryResponse} from '../../CardFactoryResponse';
import {AssistantComponent} from './assistant.component';

export class AssistantCardFactory implements CardFactory<AppModel> {

    create(model: AppModel): CardFactoryResponse {
        const cards = [
            new DynamicCard(
                AssistantComponent,
                -1,
                {response: model.assistantResponse},
            )
        ];

        return new CardFactoryResponse(cards);
    }
}


export const ASSISTANT_FACTORY = new AssistantCardFactory();

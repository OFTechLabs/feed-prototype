import {
    ActionWithContextResponse,
    IHiveMindNeuron,
    INeuronResponse,
    LocalizedWordsMatcherNeuron,
    RequestContext,
    SimpleResponse,
    UserInput
} from '@oratio/oratio';
import {knownWords} from './MonitorNeuron.words';
import {DynamicCard} from '../../DynamicCard';
import {AssistantComponent} from '../assistant/assistant.component';

export class MonitorNeuron implements IHiveMindNeuron {

    process(userInput: UserInput, context: RequestContext): Promise<INeuronResponse> {
        const response = new LocalizedWordsMatcherNeuron(
            knownWords,
            'That\s what I\'m here for. I will monitor our performance and progress and notify the right people at the right time to make sure we achieve our goals in time.'
            + ' If new data becomes available that we should act upon, I will let you know.'
        ).process(userInput, context);

        return response.then(answer => {
            if (answer instanceof SimpleResponse) {
                return new ActionWithContextResponse(
                    answer.response,
                    answer.params,
                    answer.getCertainty(),
                    () => {
                    },
                    {
                        cards: [
                            new DynamicCard(
                                AssistantComponent,
                                3,
                                {
                                    response: 'If there are any other areas I should monitor or guide, please let me know!',
                                    actions: ['Give Feedback']
                                }
                            )
                        ]
                    }
                );
            }

            return answer;
        });
    }
}

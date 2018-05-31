import {
    ActionWithContextResponse,
    IHiveMindNeuron,
    INeuronResponse,
    LocalizedWordsMatcherNeuron,
    RequestContext,
    SimpleResponse,
    UserInput
} from '@oratio/oratio';
import {DynamicCard} from '../feed/card/DynamicCard';
import {DemoComponent} from './demo.component';
import {knownWords} from './SalesPitch.words';

export class SalesPitchNeuron implements IHiveMindNeuron {

    process(userInput: UserInput, context: RequestContext): Promise<INeuronResponse> {
        const response = new LocalizedWordsMatcherNeuron(
            knownWords,
            'Here are the main reasons to buy the feed :)'
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
                                DemoComponent,
                                0,
                                {}
                            )
                        ]
                    }
                );
            }

            return answer;
        });
    }
}

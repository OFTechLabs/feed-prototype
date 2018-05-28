import {
    ActionWithContextResponse,
    IHiveMindNeuron,
    INeuronResponse,
    Locale,
    LocalizedWordsMatcherNeuron,
    RequestContext, SimpleResponse,
    UnderstoodResponse,
    UserInput
} from '@oratio/oratio';
import {knownWords} from './UpdateNeuron.words';
import {UpdatesCardFactory} from './UpdatesCardFactory';

export class UpdateNeuron implements IHiveMindNeuron {

    process(userInput: UserInput, context: RequestContext): Promise<INeuronResponse> {
        const response = new LocalizedWordsMatcherNeuron(
            knownWords,
            'Sure, here are all the latest updates.'
        ).process(userInput, context);

        return response.then(answer => {
            if (answer instanceof SimpleResponse) {
                return new ActionWithContextResponse(
                    answer.response,
                    answer.params,
                    answer.getCertainty(),
                    () => {},
                    {
                        cardFactory: new UpdatesCardFactory()
                    }
                );
            }

            return answer;
        });
    }
}

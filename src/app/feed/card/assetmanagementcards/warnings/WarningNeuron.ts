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
import {knownWords} from './WarningNeuron.words';
import {WarningCardsFactory} from './WarningCardsFactory';

export class WarningNeuron implements IHiveMindNeuron {

    process(userInput: UserInput, context: RequestContext): Promise<INeuronResponse> {
        const response = new LocalizedWordsMatcherNeuron(
            knownWords,
            'There do seem to be some errors, I have notified the servicedesk, we\'ll get in touch when it\'s fixed.'
        ).process(userInput, context);

        return response.then(answer => {
            if (answer instanceof SimpleResponse) {
                return new ActionWithContextResponse(
                    answer.response,
                    answer.params,
                    answer.getCertainty(),
                    () => {},
                    {
                        cardFactory: new WarningCardsFactory()
                    }
                );
            }

            return answer;
        });
    }
}

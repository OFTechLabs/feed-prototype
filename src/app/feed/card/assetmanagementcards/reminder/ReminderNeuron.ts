import {
    ActionWithContextResponse,
    IHiveMindNeuron,
    INeuronResponse,
    LocalizedWordsMatcherNeuron,
    RequestContext,
    SimpleResponse,
    UserInput
} from '@oratio/oratio';
import {knownWords} from './ReminderNeuron.words';
import {ComplexSessionReminderCardFactory} from './ComplexSessionReminderCardFactory';

export class ReminderNeuron implements IHiveMindNeuron {

    process(userInput: UserInput, context: RequestContext): Promise<INeuronResponse> {
        const response = new LocalizedWordsMatcherNeuron(
            knownWords,
            'Here are some tasks with their due dates, I will notify you again before the due date.'
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
                        cardFactory: new ComplexSessionReminderCardFactory()
                    }
                );
            }

            return answer;
        });
    }
}

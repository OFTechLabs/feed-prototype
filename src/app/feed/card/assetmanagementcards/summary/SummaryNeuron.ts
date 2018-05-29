import {
    ActionWithContextResponse,
    IHiveMindNeuron,
    INeuronResponse,
    LocalizedWordsMatcherNeuron,
    RequestContext,
    SimpleResponse,
    UserInput
} from '@oratio/oratio';
import {ReminderComponent} from '../reminder/reminder.component';
import {DynamicCard} from '../../DynamicCard';
import {knownWords} from './SummaryNeuron.words';
import {ArrayChartComponent} from '../graphcards/arraycharts/arraychart.component';
import {ChartDataArray} from '../graphcards/ChartArrayModel';
import {ProgressCardComponent} from '../progress-card/progress-card.component';

export class SummaryNeuron implements IHiveMindNeuron {

    process(userInput: UserInput, context: RequestContext): Promise<INeuronResponse> {
        const response = new LocalizedWordsMatcherNeuron(
            knownWords,
            'Social & affordability scores are falling behind, the other scores are doing fine. One of our reports is overdue. Progress indicates we are on target for our goals. Lastly our returns are positive.'
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
                                ArrayChartComponent,
                                3,
                                new ChartDataArray('Scores', ['Social Score', 'Financial Score', 'Sustainability Score', 'Designing', 'Affordability Score', 'Tenant Score', 'Maintenance Score'], [
                                        {data: [4, 6, 8, 7, 5, 9, 10], label: 'Portfolio North'},
                                        {data: [5, 8, 6, 8, 7, 9, 9], label: 'Portfolio South'}
                                    ],
                                    'radar', true)
                            ),
                            new DynamicCard(
                                ReminderComponent,
                                3,
                                {
                                    title: 'Report overdue',
                                    daysLeft: -3,
                                    description: 'Our quarterly report is overdue, stakeholders are awaiting our response.',
                                    actions: ['Notify Financial Departement']
                                },
                            ),
                            new DynamicCard(
                                ProgressCardComponent,
                                3,
                                {
                                    title: 'Achieving Goals',
                                    explanation: 'We are on target to achieve our goals.',
                                    progressValue: 8,
                                    totalValue: 14,
                                }
                            ),
                            new DynamicCard(
                                ProgressCardComponent,
                                3,
                                {
                                    title: 'Finishing Tasks',
                                    explanation: 'We are on target to finish the tasks we set out to achieve this year.',
                                    progressValue: 52,
                                    totalValue: 131,
                                }
                            ),
                            new DynamicCard(
                                ArrayChartComponent,
                                3,
                                new ChartDataArray('Returns', ['2018', '2019', '2020', '2021', '2022', '2023', '2024'], [
                                        {data: [3.24, 4.21, 4.10, 1.2, 3.34, 3.45, 3.55], label: 'Direct Return'},
                                        {data: [3.36, 3.65, 2.5, 5.1, 3.76, 3.89, 4.1], label: 'Indirect Return'}
                                    ],
                                    'bar', true)
                            ),
                        ]
                    }
                );
            }

            return answer;
        });
    }
}

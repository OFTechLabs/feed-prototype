import {ModuleDataSet} from './AppModel';
import {ChartDataArray} from './feed/card/assetmanagementcards/graphcards/ChartArrayModel';
import {ProgressData} from './feed/card/assetmanagementcards/progress-card/ProgressModel';
import {NewsData} from './feed/card/assetmanagementcards/news-card/NewsModel';
import {Planning} from './feed/card/assetmanagementcards/planning/PlanningModel';
import {WhatsNewModel} from './feed/card/assetmanagementcards/whatsnew/WhatsNewModel';
import {ReminderModel} from './feed/card/assetmanagementcards/reminder/ReminderModel';

export class AppModelFactory {

    public static create(): ModuleDataSet[] {
        return [new ModuleDataSet(
            'AVM',
            [new ChartDataArray('Returns', ['2018', '2019', '2020', '2021', '2022', '2023', '2024'], [
                    {data: [3.24, 4.21, 4.10, 1.2, 3.34, 3.45, 3.55], label: 'Direct Return'},
                    {data: [3.36, 3.65, 2.5, 5.1, 3.76, 3.89, 4.1], label: 'Indirect Return'}
                ],
                'bar', true)
                , new ChartDataArray('Number of Properties', ['2018', '2019', '2020', '2021', '2022', '2023', '2024'], [
                    {data: [605, 590, 610, 617, 630, 632, 632], label: 'Center'},
                    {data: [400, 480, 500, 510, 530, 550, 555], label: 'North'},
                    {data: [1000, 1010, 1012, 990, 990, 990, 990], label: 'South'}
                ],
                'line', true)
                , new ChartDataArray('Scores', ['Social Score', 'Financial Score', 'Sustainability Score', 'Designing', 'Affordability Score', 'Tenant Score', 'Maintenance Score'], [
                    {data: [4, 6, 8, 7, 5, 9, 10], label: 'Portfolio North'},
                    {data: [5, 8, 6, 8, 7, 9, 9], label: 'Portfolio South'}
                ],
                'radar', true)
                , new ChartDataArray('Analyzed Complexes', ['Analyzed Complexes', 'Unanalyzed Complexes'], [
                    {data: [100, 80], label: 'Series A'}
                ],
                'pie', true)],
            [
                new ProgressData(
                    'AVM Valuation progress',
                    'View calculation process',
                    'Open AVM',
                    'AVM is still calculating, so far 112 out of 250 dwellings are valuated',
                    112,
                    250,
                    'Taxationmanager')
            ],
            [], [], [], [],
            [new WhatsNewModel('AVM 2018.9',
                'New version of AVM is available! The new features can be seen in the demo below. AVM now has a dashboard with the most relevant information about your properties.'
                , 'https://www.youtube.com/embed/LD9Oaj0B5Cc', ['Go to AVM', 'Go to Dashboard'], () => {
                }, ['Taxationmanager'])]
        ),
            new ModuleDataSet(
                'Ortec Finance',
                [],
                [],
                [new NewsData({
                        title: 'Interactieve conjunctuurgrafiek', date: '2018-05-17T09:03:01+0200',
                        teaser: 'Conjunctuurcycli zijn een van de belangrijkste kenmerken (‘stylized facts’) die aangeven hoe assetprijzen, rentes, volatiliteiten en macro-economische variabelen zich in de realiteit gedragen.',
                        imageUrl: '/feedprototype/assets/business.jpg'
                    },
                    'http://insights.ortec-finance.com/nl-nl/2018/02/16/interactieve-conjunctuurgrafiek')], [], [], [], []
            ),
            new ModuleDataSet(
                'AM',
                [],
                [
                    new ProgressData(
                        'Complexes',
                        'View Unanalyzed Complexes',
                        'View C026',
                        'Out of 231 complexes 116 have already been analyzed, try and analyze all complexes every year.',
                        116,
                        231,
                        'Assetmanager'
                    )
                ],
                [],
                [new Planning('Quarterly Tasks', 'Q1', 1, [
                        'Finalize the year-transition so we can combine the past policy with the current properties.',
                        'Start analyzing the goals & properties.',
                    ], ['Year transition', 'Goals', 'Analyze'],
                    () => {
                    }
                ), new Planning('Quarterly Tasks', 'Q2', 2, [
                        'Finalize all your policy, make sure all properties have the correct policy.',
                        'Make a proposal for your subportfolio.'
                    ], ['Properties missing policy', 'Make a proposal'], () => {
                    }
                ), new Planning('Quarterly Tasks', 'Q4', 4, [
                        'Start the year transition',
                        'Start strategy for next year',
                    ], ['Year transition', 'Formulate strategy'], () => {
                    }
                )], [new ReminderModel('Policy Proposal', 'A proposed variant is required to finalize the policy for this year',
                    21, ['Propose a Variant'], () => {
                    })], [], [new WhatsNewModel('AM 2018.9',
                    'New version of AM is available! The new features can be seen in the demo below. It is now possible to use newlybuilt.'
                    , 'https://www.youtube.com/embed/LD9Oaj0B5Cc', ['Go to AM', 'Go to Newlybuilt'], () => {
                    }, ['Assetmanager'])]
            )];
    }
}

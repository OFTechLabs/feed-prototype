import { ModuleDataSet } from './AppModel';
import {ChartDataArray} from './feed/card/assetmanagementcards/graphcards/ChartArrayModel';
import {ProgressData} from './feed/card/assetmanagementcards/progress-card/ProgressModel';
import {NewsData} from './feed/card/assetmanagementcards/news-card/NewsModel';
import {Planning} from './feed/card/assetmanagementcards/planning/PlanningModel';

export class AppModelFactory {

    public static create(): ModuleDataSet[] {
        return [new ModuleDataSet(
            'AVM',
            [new ChartDataArray('Bar Chart', ['2006', '2007', '2008', '2009', '2010', '2011', '2012'], [
                    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
                    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
                ],
                'bar', true)
                , new ChartDataArray('Line Chart', ['January', 'February', 'March', 'April', 'May', 'June', 'July'], [
                    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
                    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
                    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
                ],
                'line', true)
                , new ChartDataArray('Radar Chart', ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'], [
                    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
                    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
                ],
                'radar', true)
                , new ChartDataArray('Pie Chart', ['Analyzed Complexes', 'Total Complexes'], [
                    {data: [100, 80], label: 'Series A'}
                ],
                'pie', true)
                , new ChartDataArray('Doughnut Chart', ['Analyzed Complexes', 'Total Complexes'], [
                    {data: [100, 80], label: 'Series A'}
                ],
                'doughnut', true)
                , new ChartDataArray('Polar Area Chart', ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'],
                [
                    {data: [300, 500, 100, 40, 120], label: 'Series A'}
                ],
                'polarArea', true)],
            [new ProgressData('AVM Valuation progress', 'View calculation process', 'Open AVM',
                'AVM is still calculating, so far 112 out of 250 dwellings are valuated', 112, 250)],
            [], [], []
        ),
            new ModuleDataSet(
                'Ortec Finance',
                [],
                [],
                [new NewsData({
                        title: 'Interactieve conjunctuurgrafiek', date: '2018-05-17T09:03:01+0200',
                        teaser: 'Conjunctuurcycli zijn een van de belangrijkste kenmerken (‘stylized facts’) die aangeven hoe assetprijzen, rentes, volatiliteiten en macro-economische variabelen zich in de realiteit gedragen.',
                        imageUrl: 'http://insights.ortec-finance.com/-/media/OF8/Insights/business-cycle-outlook-thumb.ashx?mh=450&la=nl-NL&h=321&w=450&mw=450&hash=65E2A11D2101B87B5E917FA1D3A560CBEBE90366'
                    },
                    'http://insights.ortec-finance.com/nl-nl/2018/02/16/interactieve-conjunctuurgrafiek')], [], []
            ),
            new ModuleDataSet(
                'AM',
                [],
                [],
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
                )],[]
            )];
    }
}

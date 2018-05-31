import { UpdatesModel } from '../feed/card/assetmanagementcards/update/UpdatesModel';
import { NewsData } from '../feed/card/assetmanagementcards/news-card/NewsModel';
import { ReminderModel } from '../feed/card/assetmanagementcards/reminder/ReminderModel';
import { WhatsNewModel } from '../feed/card/assetmanagementcards/whatsnew/WhatsNewModel';
import { ProgressData } from '../feed/card/assetmanagementcards/progress-card/ProgressModel';
import { ChartDataArray } from '../feed/card/assetmanagementcards/graphcards/ChartArrayModel';
import { Planning } from '../feed/card/assetmanagementcards/planning/PlanningModel';

export class ModuleDataSet {
    constructor(public moduleName: string,
                public ArrayChartDataSet: ChartDataArray[],
                public ProgressDataSet: ProgressData[],
                public NewsDataSet: NewsData[],
                public PlanningSet: Planning[],
                public ReminderSet: ReminderModel[],
                public UpdatesSet: UpdatesModel[],
                public WhatsNewSet: WhatsNewModel[]) {
    }
}

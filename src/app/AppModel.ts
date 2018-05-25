import {ReminderModel} from './feed/card/assetmanagementcards/reminder/ReminderModel';
import {Planning} from './feed/card/assetmanagementcards/planning/PlanningModel';
import {NewsData} from './feed/card/assetmanagementcards/news-card/NewsModel';
import {ProgressData} from './feed/card/assetmanagementcards/progress-card/ProgressModel';
import {ChartDataArray} from './feed/card/assetmanagementcards/graphcards/ChartArrayModel';


export class AppModel {
    constructor(public user: User,
                public modules: Module[],
                public complexes: Complex[],
                public moduleData: ModuleDataSet[],
                public quarter: number,
                public updates: Update[]) {
    }
}

export class Module {
    constructor(public name: string) {
    }
}

export class User {
    constructor(public fullName: string,
                public username: string,
                public roles: string[],) {
    }
}

export class Complex {
    constructor(public complexName: string,
                public isAnalyzed: boolean,) {
    }
}

export class ModuleDataSet {
    constructor(public moduleName: string,
                public ArrayChartDataSet: ChartDataArray[],
                public ProgressDataSet: ProgressData[],
                public NewsDataSet: NewsData[],
                public PlanningSet: Planning[],
                public ReminderSer: ReminderModel[]) {
    }
}

export class Update {
    constructor(
        public title: string,
        public description: string,
        public roles: string[],
        public module: string
    ) {
    }
}

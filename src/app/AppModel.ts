import {ReminderModel} from './feed/card/assetmanagementcards/reminder/ReminderModel';
import {Planning} from './feed/card/assetmanagementcards/planning/PlanningModel';
import {NewsData} from './feed/card/assetmanagementcards/news-card/NewsModel';
import {ProgressData} from './feed/card/assetmanagementcards/progress-card/ProgressModel';
import {ChartDataArray} from './feed/card/assetmanagementcards/graphcards/ChartArrayModel';
import {UpdatesModel} from './feed/card/assetmanagementcards/update/UpdatesModel';
import {WhatsNewModel} from './feed/card/assetmanagementcards/whatsnew/WhatsNewModel';


export class AppModel {
    constructor(public user: User,
                public modules: Module[],
                public complexes: Complex[],
                public moduleData: ModuleDataSet[],
                public quarter: number,
                public updates: Update[],
                public warnings: Warning[]) {
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
                public ReminderSer: ReminderModel[],
                public UpdatesSet: UpdatesModel[],
                public WhatsNewSet: WhatsNewModel[]) {
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

export class Warning {
    constructor(
        public title: string,
        public description: string,
        public actions: string[],
        public roles: string[],
        public module: string
    ) {
    }
}

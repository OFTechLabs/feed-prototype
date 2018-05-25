export class AppModel {
    constructor(public user: User,
                public modules: Module[],
                public complexes: Complex[],
                public moduleData: ModuleDataSet,
                public quarter: number,
                public updates: Update[]
                ) {
    }
}

export class Module {
    constructor(
        public name: string
    ) {
    }
}

export class User {
    constructor(
        public fullName: string,
        public username: string,
        public roles: string[],
    ) {
    }
}

export class Complex {
    constructor(
        public complexName: string,
        public isAnalyzed: boolean,
    ) {
    }
}

export class ChartDataArray {
    constructor(public title: string,
                public ChartLabels: string[],
                public ChartDataArray: { data: number[]; label: string }[],
                public ChartType: string,
                public ChartLegend: boolean) {
    }
}

export class ModuleDataSet {
    constructor(public moduleName: string,
                public ArrayChartDataSet: ChartDataArray[]) {
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

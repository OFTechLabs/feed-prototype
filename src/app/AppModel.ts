export class AppModel {
    constructor(
        public user: User,
        public modules: Module[],
        public complexes: Complex[],
        public avmData: AvmDataSet[]
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

export class AvmDataSet {

    constructor(
        public title: string,
        public ChartLabels: string[],
        public ChartData: { data: number[]; label: string }[],
        public ChartType: string) {
    }

}

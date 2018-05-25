export class AppModel {
    constructor(
        public user: User,
        public modules: Module[],
        public complexes: Complex[],
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

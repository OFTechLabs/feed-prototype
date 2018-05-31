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

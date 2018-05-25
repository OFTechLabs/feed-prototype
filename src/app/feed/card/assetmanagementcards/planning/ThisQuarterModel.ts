export class ThisQuarterModel {
    constructor(
        public title: string,
        public quarter: string,
        public highlights: string[],
        public actions: string[],
        public dismiss: () => void
    ) {}
}

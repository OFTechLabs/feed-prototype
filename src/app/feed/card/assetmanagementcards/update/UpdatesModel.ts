export class UpdatesModel {
    constructor(
        public title: string,
        public update: string,
        public dismiss: () => void,
    ) {
    }
}

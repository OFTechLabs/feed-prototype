export class WhatsNewModel {
    constructor(public title: string,
        public description: string,
        public url: string,
        public actions: string[],
        public dismiss: () => void,
    ) { }
}


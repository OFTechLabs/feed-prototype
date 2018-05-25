export class ReminderModel {

    constructor(
        public title: string,
        public description: string,
        public daysLeft: number,
        public actions: string[],
        public dismiss: () => void,
    ) {
    }
}

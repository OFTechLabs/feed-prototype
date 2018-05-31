export class UpdateFeedAssistanceResponse {
    static readonly type = '[Feed] Update Assistance Response';

    constructor(public assistanceResponse: string) {
    }
}

export class ChangeUser {
    static readonly type = '[User] Changed user';

    constructor(public roleNames: string[]) {
    }
}

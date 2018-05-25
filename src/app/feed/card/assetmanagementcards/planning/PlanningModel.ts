export class Planning {
    constructor(public title: string,
                public quarter: string,
                public quarternumber: number,
                public highlights: string [],
                public actions: string [],
                public dismiss: () => void) {
    }
}


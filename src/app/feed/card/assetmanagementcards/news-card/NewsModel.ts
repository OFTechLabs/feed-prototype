export class NewsData {
    constructor(public article: {
                    title: string,
                    date: string,
                    teaser: string,
                    imageUrl: string
                },
                public readmoreLink: string) {
    }
}

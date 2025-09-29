export interface Article {
    title: string;
    description: string;
    url: string;
    source: string;
    image: string;
    publishedAt: string;
}

export interface NewsSearchOptions {
    keywords?: string;
    categories?: string;
    countries?: string;
    languages?: string;
    fromDate?: Date;
    toDate?: Date;
}
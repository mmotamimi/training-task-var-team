export interface Article {
    title: string;
    description: string;
    url: string;
    source: string;
    image: string;
    publishedAt: string;
}

export interface ArticleResponse {
    title: string;
    description: string;
    url: string;
    source: string;
    image: string;
    published_at: string;
}

export interface NewsApiParams {
    access_key: string;
    keywords?: string;
    categories?: string;
    countries?: string;
    languages?: string;
    limit: number;
    date?: string;
}

export interface NewsSearchOptions {
    keywords?: string;
    categories?: string;
    countries?: string;
    languages?: string;
    fromDate?: Date;
    toDate?: Date;
}
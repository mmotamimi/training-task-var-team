import axios, { AxiosError } from "axios";
import type { Article, ArticleResponse, NewsApiParams, NewsSearchOptions } from "../Types/Types";
const MEDIASTACK_KEY = import.meta.env.VITE_MEDIASTACK_KEY;
const NewsUrl = import.meta.env.VITE_NEWS_URL;

export const fetchArticles = async (options: NewsSearchOptions): Promise<Article[]> => {
  try {
    const params: NewsApiParams = {
      access_key: MEDIASTACK_KEY,
      keywords: options.keywords || undefined,
      categories: options.categories || undefined,
      countries: options.countries || undefined,
      languages: options.languages || undefined,
      limit: 100,
    };

    if (options.fromDate) {
      const from = options.fromDate;
      const to = options.toDate ? new Date(options.toDate) : from;
      to.setDate(to.getDate() - 1);
      params.date = `${from.toISOString().split("T")[0]},${to.toISOString().split("T")[0]}`;
    }

    const res = await axios.get<{ data: ArticleResponse[] }>(NewsUrl, { params });

    return res.data.data.map((a: ArticleResponse): Article => ({
      title: a.title,
      description: a.description,
      url: a.url,
      source: a.source,
      image: a.image,
      publishedAt: a.published_at,
    }));
  } catch (error) {
    const err = error as AxiosError<{ message?: string }>;
    console.error("Error fetching news:", error);
    const statusCode = err.response?.status || 500; // fallback to 500
    const message =
      err.response?.data?.message || "Failed to fetch news. Please try again later.";

    throw new Error(`Error ${statusCode}: ${message}`);
  }
};
export default fetchArticles;
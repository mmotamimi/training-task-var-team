import axios from "axios";
import type Article  from "../Types/Article";
import type NewsSearchOptions from "../Types/NewsSearchOptions";
const MEDIASTACK_KEY = import.meta.env.VITE_MEDIASTACK_KEY;
const NewsUrl = import.meta.env.VITE_NEWS_URL;

export const fetchArticles = async (options: NewsSearchOptions): Promise<Article[]> => {
  try {
    const params: any = {
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

    const res = await axios.get(NewsUrl, { params });

    return res.data.data.map((a: any) => ({
      title: a.title,
      description: a.description,
      url: a.url,
      source: a.source,
      image: a.image,
      publishedAt: a.published_at,
    }));
  } catch (error: any) {
    console.error("Error fetching news:", error);
    const statusCode = error.response?.status || 500; // fallback to 500
    const message =
      error.response?.data?.message || "Failed to fetch news. Please try again later.";

    throw new Error(`Error ${statusCode}: ${message}`);
  }
};
export default fetchArticles;
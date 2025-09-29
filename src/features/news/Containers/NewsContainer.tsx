import { useState, useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import ArticleCard from "../Components/ArticleCard";
import { categories, countries, languages } from "../Constants/NewsConstants";
import type Article from "../Types/Article";
import type NewsSearchOptions from "../Types/NewsSearchOptions";
import fetchArticles from "../APIs/NewsApi";
import ErrorPage from "../../../shared/Error/ErrorPage";
import {
    Page,
    Controls,
    DateRange,
    SearchButton,
    LoadMoreContainer,
    LoadMoreBtn
} from './NewsContainer.styles';

export default function NewsContainer() {
    const [Error, setError] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("");
    const [country, setCountry] = useState("");
    const [language, setLanguage] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [allArticles, setAllArticles] = useState<Article[]>([]);
    const [visibleCount, setVisibleCount] = useState(6);

    const didFetch = useRef(false);

    const loadArticles = async () => {
        const options: NewsSearchOptions = {
            keywords: keyword,
            categories: category,
            countries: country,
            languages: language,
            fromDate: fromDate ? new Date(fromDate) : undefined,
            toDate: toDate ? new Date(toDate) : undefined,
        };
        try {
            const data = await fetchArticles(options);
            setAllArticles(data);
            setVisibleCount(6);
        }
        catch {
            setError(true);
        }
    };

    useEffect(() => {
        if (didFetch.current) return;
        didFetch.current = true;
        loadArticles();
    }, []);

    const visibleArticles = allArticles.slice(0, visibleCount);

    if (Error)
        return <ErrorPage message="Failed to fetch news. Check your internet connection or try again later." />;

    return (
        <Page>
            <Controls>
                <input
                    placeholder="Keyword"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    {categories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>
                <select value={country} onChange={(e) => setCountry(e.target.value)}>
                    <option value="">All Countries</option>
                    {countries.map((c) => (
                        <option key={c.code} value={c.code}>{c.name}</option>
                    ))}
                </select>
                <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <option value="">All Languages</option>
                    {languages.map((l) => (
                        <option key={l.code} value={l.code}>{l.name}</option>
                    ))}
                </select>
            </Controls>

            <DateRange>
                <label>
                    From:
                    <input
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                    />
                </label>
                <label>
                    To:
                    <input
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                    />
                </label>
            </DateRange>

            <SearchButton color="primary" variant="contained" onClick={loadArticles}>
                Search....
            </SearchButton>

            {visibleArticles.length === 0 ? (
                <p>No articles found.</p>
            ) : (
                <>
                    <Grid container spacing={2}>
                        {visibleArticles.map((a) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={a.url}>
                                <ArticleCard {...a} />
                            </Grid>
                        ))}
                    </Grid>

                    {visibleCount < allArticles.length && (
                        <LoadMoreContainer>
                            <LoadMoreBtn
                                color="primary"
                                variant="contained"
                                onClick={() => setVisibleCount((prev) => prev + 6)}
                            >
                                Load More
                            </LoadMoreBtn>
                        </LoadMoreContainer>
                    )}
                </>
            )}
        </Page>
    );
}
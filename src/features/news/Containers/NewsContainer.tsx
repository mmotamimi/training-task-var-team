import { useState, useEffect, useRef } from "react";
import { Typography, Button } from "@mui/material";
import { categories, countries, languages } from "../Constants/NewsConstants";
import type { Article, NewsSearchOptions } from "../Types/Types";
import fetchArticles from "../APIs/NewsApi";
import { useError } from "../../../shared/Error/context/ErrorContext";
import { createStyles } from "./NewsContainer.styles";
import ArticlesGrid from "../Components/ArticlesGrid";
import { Link } from "@tanstack/react-router";

export default function NewsContainer() {
    const { setError } = useError();
    const [Loading, setLoading] = useState(true);
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("");
    const [country, setCountry] = useState("");
    const [language, setLanguage] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [allArticles, setAllArticles] = useState<Article[]>([]);
    const [visibleCount, setVisibleCount] = useState(6);

    const didFetch = useRef(false);
    const styles = createStyles();

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
            setLoading(false);
        }
        catch (err: any) {
            // Check if the error has a message and optional code
            const message = err.message || "Failed to fetch articles";
            const code = err.code || 500; // fallback code
            setError(message, code);
        }
    };

    useEffect(() => {
        if (didFetch.current) return;
        didFetch.current = true;
        loadArticles();
    }, []);

    const visibleArticles = allArticles.slice(0, visibleCount);

    if (Loading) return <Typography>Loading</Typography>

    return (
        <div className={styles.page}>
            <div className={styles.controls}>
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
            </div>

            <div className={styles.dateRange}>
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
            </div>
            <div className={styles.buttonsContainer}>
                <Button className={styles.button} color="primary" variant="contained" onClick={loadArticles}>
                    Search....
                </Button>
                <Button
                    color="primary" variant="contained"
                    className={styles.button}
                    component={Link}
                    to="/bookmarks"
                >
                    View Bookmarks
                </Button>
            </div>

            {visibleArticles.length === 0 ? (
                <p>No articles found.</p>
            ) : (
                <>
                    <ArticlesGrid
                        articles={allArticles}
                        visibleCount={visibleCount}
                        onLoadMore={() => setVisibleCount((prev) => prev + 6)}
                    />
                </>
            )}
        </div>
    );
}
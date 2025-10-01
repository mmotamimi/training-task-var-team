import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link } from "@tanstack/react-router";
import ArticlesGrid from "../Components/ArticlesGrid";
import type { Article } from "../Types/Types";

export default function BookmarksContainer() {
    const [bookmarks, setBookmarks] = useState<Article[]>([]);
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("bookmarkedArticles") || "[]");
        setBookmarks(saved);
    }, []);

    if (bookmarks.length === 0) return <p>No bookmarked articles yet.</p>;

    return <div>
            <Button
                variant="outlined"
                color="primary"
                style={{ marginBottom: "1rem" }}
                component={Link}
                to="/news"
            >
                Go Back to News
            </Button>

            <ArticlesGrid
                articles={bookmarks}
                visibleCount={visibleCount}
                onLoadMore={() => setVisibleCount((prev) => prev + 6)}
            />
        </div>;
}
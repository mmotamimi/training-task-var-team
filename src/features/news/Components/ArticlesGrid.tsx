import { Grid, Button } from "@mui/material";
import ArticleCard from "./ArticleCard";
import type { Article } from "../Types/Types";
import { createStyles } from "./ArticlesGrid.styles"

interface ArticlesGridProps {
  articles: Article[];
  visibleCount?: number;
  onLoadMore?: () => void;
}

const ArticlesGrid = ({ articles, visibleCount, onLoadMore }: ArticlesGridProps) => {
  const styles = createStyles();

  const visibleArticles = visibleCount ? articles.slice(0, visibleCount) : articles;

  return (
    <>
      <Grid container spacing={2}>
        {visibleArticles.map((a) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={a.url}>
            <ArticleCard {...a} />
          </Grid>
        ))}
      </Grid>

      {onLoadMore && visibleCount && visibleCount < articles.length && (
        <div className={styles.loadMoreContainer}>
          <Button
            className={styles.loadMoreBtn}
            color="primary"
            variant="contained"
            onClick={onLoadMore}
          >
            Load More
          </Button>
        </div>
      )}
    </>
  );
};

export default ArticlesGrid;
import { IconButton, Divider, Snackbar, CardActions, Card, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useRef, useState } from "react";
import { FiCopy } from 'react-icons/fi';
import { RiExternalLinkFill } from 'react-icons/ri';
import type { Article } from '../Types/Types';
import { createStyles } from './ArticleCard.styles';

const ArticleCard = (a: Article) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const styles = createStyles(theme);

    const handleCopy = () => {
        if (titleRef.current) {
            const text = titleRef.current.textContent || "";
            navigator.clipboard.writeText(text)
                .then(() => setOpen(true))
                .catch((err) => console.error("Failed to copy:", err));
        }
    };

    return (
        <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
                <div className={styles.row}>
                    {a.image && (
                        <img
                            className={styles.image}
                            src={a.image || "https://via.placeholder.com/300x120?text=No+Image"}
                            alt={a.title}
                        />
                    )}
                    <Typography className={styles.title} ref={titleRef}>
                        {a.title}
                    </Typography>
                </div>

                <Divider />

                <Typography className={styles.description}>
                    {a.description
                        ? a.description.length > 200
                            ? a.description.slice(0, 200) + "..."
                            : a.description
                        : "No description available."}
                </Typography>

                <Typography color='secondary'>
                    {`${a.source} | Published: ${new Date(a.publishedAt).toLocaleDateString()}`}
                </Typography>
            </CardContent>

            <CardActions className={styles.actionsContainer}>
                <div>
                    <IconButton color="primary" aria-label="copy link" onClick={handleCopy}>
                        <FiCopy size={22} />
                    </IconButton>
                    <IconButton color="primary" aria-label="open link" onClick={() => window.open(a.url, "_blank")}>
                        <RiExternalLinkFill size={22} />
                    </IconButton>
                    <Snackbar
                        open={open}
                        autoHideDuration={1500}
                        onClose={() => setOpen(false)}
                        message="Copied!"
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    />
                </div>
            </CardActions>
        </Card>
    );
};

export default ArticleCard;
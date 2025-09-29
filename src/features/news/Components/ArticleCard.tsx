import { Typography, IconButton, Divider, Snackbar, CardActions } from '@mui/material';
import { useRef, useState } from "react";
import { FiCopy } from 'react-icons/fi';
import { RiExternalLinkFill } from 'react-icons/ri';
import type Article from '../Types/Article';
import {
    StyledCard,
    StyledCardContent,
    Row,
    ActionsContainer,
    Image,
    Title,
    Description
} from './ArticleCard.styles';

const ArticleCard = (a: Article) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [open, setOpen] = useState(false);

    const handleCopy = () => {
        if (titleRef.current) {
            const text = titleRef.current.textContent || "";
            navigator.clipboard.writeText(text)
                .then(() => setOpen(true))
                .catch((err) => console.error("Failed to copy:", err));
        }
    };

    return (
        <StyledCard>
            <StyledCardContent>
                <Row>
                    {a.image && (
                        <Image
                            src={a.image || "https://via.placeholder.com/300x120?text=No+Image"}
                            alt={a.title}
                        />
                    )}
                    <Title ref={titleRef}>
                        {a.title}
                    </Title>
                </Row>

                <Divider />

                <Description>
                    {a.description
                        ? a.description.length > 200
                            ? a.description.slice(0, 200) + "..."
                            : a.description
                        : "No description available."}
                </Description>

                <Typography color='secondary'>
                    {`${a.source} | Published: ${new Date(a.publishedAt).toLocaleDateString()}`}
                </Typography>
            </StyledCardContent>

            <CardActions>
                <ActionsContainer>
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
                </ActionsContainer>
            </CardActions>
        </StyledCard>
    );
};

export default ArticleCard;
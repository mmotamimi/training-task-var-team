import type { Theme } from "@mui/material";
import { css } from "@emotion/css";

export const createStyles = (theme: Theme) => {
    return {
        card: css({
            maxWidth: 600,
            margin: '1rem auto',
            borderRadius: 8,
            boxShadow: '0px 3px 6px rgba(0,0,0,0.16)',
        }),
        cardContent: css({
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        }),
        row: css({
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: 16,
        }),
        description: css({
            fontSize: 16,
            color: theme.palette.text.primary,
            marginBottom: '1.5rem',
        }),
        title: css({
            fontSize: 14,
            fontWeight: 600,
            height: 150,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
        }),
        image: css({
            width: '100%',
            height: 120,
            objectFit: 'cover',
            borderRadius: 8,
        }),
        actionsContainer: css({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%',
            gap: 8,
        }),

    }
}
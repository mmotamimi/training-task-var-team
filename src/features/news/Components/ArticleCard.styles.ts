import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography } from '@mui/material';

export const StyledCard = styled(Card)(() => ({
    maxWidth: 600,
    margin: '1rem auto',
    borderRadius: 8,
    boxShadow: '0px 3px 6px rgba(0,0,0,0.16)',
}));

export const StyledCardContent = styled(CardContent)(() => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
}));

export const Row = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
}));

export const ActionsContainer = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    gap: 8,
}));

export const Image = styled('img')(() => ({
    width: '100%',
    height: 120,
    objectFit: 'cover',
    borderRadius: 8,
}));

export const Title = styled(Typography)(() => ({
    fontSize: 14,
    fontWeight: 600,
    height: 150,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
}));

export const Description = styled(Typography)(({ theme }) => ({
    fontSize: 16,
    color: theme.palette.text.secondary,
    marginBottom: '1.5rem',
}));

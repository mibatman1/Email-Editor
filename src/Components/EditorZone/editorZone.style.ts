import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

export const StyledGrid = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '90vh',
    overflow:'auto',
    border:'1px solid black'
}));
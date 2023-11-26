import { Grid, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function FreeShipping() {
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      sx={{
        borderRadius: 0,
        height: '2rem',
        padding: 0,
      }}
    >
      <LocalShippingIcon sx={{ marginRight: '0.5rem', color: '#034072' }} />
      <Typography
        variant='subtitle1'
        sx={{ textDecoration: 'underline', color: '#034072' }}
      >
        <b>ENVIO GRATIS a todo el país desde $15000</b>
      </Typography>
    </Grid>
  );
}

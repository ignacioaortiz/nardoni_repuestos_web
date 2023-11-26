import { Grid, Typography } from '@mui/material';
import banner from '../assets/images/productos.jpeg';

export default function BannerProductos() {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignContent='center'
      sx={{ padding: '4rem 0' }}
    >
      <Grid item>
        <Typography variant='h4' color='black' align='center'>
          MARCAS
        </Typography>
      </Grid>
      <hr style={{ width: '40%' }} />
      <Grid container sx={{ margin: '1rem 0' }}>
        <Grid item xs={12} sm={6}>
          <img
            src={banner}
            alt=''
            style={{ width: '100%', borderRadius: '1rem' }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 2rem',
            '@media (max-width: 600px)': { paddingTop: '2rem' },
          }}
        >
          <Typography variant='h5' color='textPrimary' align='center'>
            Contamos con una amplia variedad de productos de las marcas más
            reconocidas del mercado.
            <br />
            LO QUE NECESITES, LO CONSEGUIMOS!
          </Typography>
          <Typography></Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

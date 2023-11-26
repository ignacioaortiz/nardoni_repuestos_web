import { Grid, Typography } from '@mui/material';

export default function Nosotros() {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignContent='center'
      sx={{ padding: '3rem' }}
    >
      <Grid item>
        <Typography variant='h4' color='black' align='center'>
          NOSOTROS
        </Typography>
      </Grid>
      <hr style={{ width: '40%' }} />
      <Grid
        item
        sx={{
          width: '70%',
          '@media (max-width: 600px)': { width: '100%' },
        }}
      >
        <Typography variant='h6' color='black' align='center'>
          Somos una empresa dedicada íntegramente a la venta de repuestos.
          Calidad, confianza y servicios son los pilares de nuestra empresa.
          Contamos con atención personalizada, adecuándonos a las necesidades
          particulares de cada empresa/persona, con el fin de cumplir con lo
          solicitado de la forma más eficaz y conveniente.
        </Typography>
      </Grid>
    </Grid>
  );
}

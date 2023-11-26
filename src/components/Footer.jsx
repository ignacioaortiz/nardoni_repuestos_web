import { Grid, IconButton, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import logo from '../assets/images/logo.svg';

export default function Footer() {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{
        bgcolor: '#eee',
        py: 2,
        mt: 5,
      }}
    >
      <Grid item container justifyContent='center' alignItems='center'>
        <a
          href='https://wa.me/5492942586136'
          target='_blanck'
          rel='noopener noreferrer'
          aria-label='Contactar por WhatsApp'
        >
          <IconButton aria-label='whatsapp' sx={{ color: '#0769bd' }}>
            <WhatsAppIcon fontSize='large' />
          </IconButton>
        </a>
        <a
          href='mailto:lucho.h.lh@gmail.com'
          target='_blanck'
          rel='noopener noreferrer'
          aria-label='Contactar por Mail'
        >
          <IconButton aria-label='telefono' sx={{ color: '#0769bd' }}>
            <EmailIcon fontSize='large' />
          </IconButton>
        </a>
      </Grid>
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item>
          <a
            href='tel:+5492942586136'
            target='_blanck'
            rel='noopener noreferrer'
            aria-label='Contactar por Telefono'
          >
            <IconButton aria-label='telefono' sx={{ color: '#0769bd' }}>
              <LocalPhoneIcon fontSize='large' />
            </IconButton>
          </a>
        </Grid>
        <Grid item>
          <Typography sx={{ color: '#0769bd' }} variant='subtitle1'>
            2942 58-6136
          </Typography>
        </Grid>
      </Grid>

      <Typography sx={{ mb: 1 }} variant='subtitle1'>
        Copyright 2023 by Nardoni | Repuestos
      </Typography>
      <img src={logo} alt='' style={{ maxWidth: '225px' }} />
      <Typography sx={{ mt: 2, color: '#0769bd' }} variant='body2'>
        Todo lo que necesitas para cualquier cosa que conduzcas
      </Typography>
    </Grid>
  );
}

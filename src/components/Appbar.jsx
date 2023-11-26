import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from '../assets/images/logo.svg';
import EmailIcon from '@mui/icons-material/Email';
import { useEffect, useState } from 'react';
import '../styles/Appbar.css';

export default function Appbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className={`appbar ${isScrolled ? 'solid' : ''}`}
        sx={{
          top: 0,
          backgroundColor: '#eeeeee',
          padding: '0 6rem',
          '@media (max-width: 600px)': {
            padding: '0',
          },
        }}
      >
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <img
              src={logo}
              alt=''
              style={{
                display: 'flex',
                justifyContent: 'center',
                cursor: 'pointer',
                width: '120px',
                margin: '0.5rem 0',
              }}
            />
          </Typography>
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
          <a
            href='https://wa.me/5492942586136'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Contactar por WhatsApp'
          >
            <IconButton aria-label='whatsapp'>
              <WhatsAppIcon fontSize='large' sx={{ color: '#076ABD' }} />
            </IconButton>
          </a>
          <a
            href='mailto:lucho.h.lh@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Contactar por Mail'
          >
            <IconButton aria-label='mail'>
              <EmailIcon fontSize='large' sx={{ color: '#076ABD' }} />
            </IconButton>
          </a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

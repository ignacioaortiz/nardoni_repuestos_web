import Banner from './components/Banner';
import Carousel from './components/Carousel';
import BannerProductos from './components/BannerProductos';
import Nosotros from './components/Nosotros';
import Productos from './components/Productos';
import Footer from './components/Footer';
import Appbar from './components/Appbar';
import { Grid } from '@mui/material';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './styles/Nosotros.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Oswald, sans-serif',
  },
  palette: {
    primary: {
      main: 'rgba(64, 64, 64, 0.5)',
    },
    secondary: {
      main: '#f5f5f5',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Appbar />
        {/* <FreeShipping /> */}
        <Banner />
        <section>
          <div className='skewed'></div>
        </section>
        <Grid
          container
          sx={{
            padding: '0 8rem',
            '@media (max-width: 600px)': {
              padding: '0 0.5rem',
            },
          }}
        >
          <Nosotros />
          <Carousel />
          <BannerProductos />
          <Productos />
        </Grid>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;

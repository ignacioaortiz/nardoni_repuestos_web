import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardMedia, Grid, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import productos from '../mock/productos';
import categorias from '../mock/categorias';
import '../styles/Carousel.css';

const CustomNextArrow = (props) => (
  <div className='custom-next-arrow' onClick={props.onClick}>
    <ArrowForwardIosIcon />
  </div>
);

const CustomPrevArrow = (props) => (
  <div className='custom-prev-arrow' onClick={props.onClick}>
    <ArrowBackIosNewIcon />
  </div>
);

export default function Productos() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div style={{ width: '100%' }}>
      {categorias.map((categoria) => (
        <Grid item key={categoria.id}>
          <Typography
            variant='h6'
            color='textPrimary'
            align='start'
            sx={{ marginLeft: '1rem' }}
          >
            {categoria.nombre}
          </Typography>
          <hr style={{ width: '100%' }} />
          <Slider {...settings} style={{ margin: '2.5rem 0.5rem' }}>
            {productos
              .filter((producto) => producto.categoria === categoria.nombre)
              .map((producto) => (
                <Grid item key={producto.id}>
                  <Card
                    style={{ border: '1px solid #e0e0e0', margin: '0.5rem' }}
                  >
                    <CardMedia
                      component='img'
                      alt=''
                      height='300'
                      image={producto.imagen}
                      sx={{
                        '@media (max-width: 600px)': {
                          height: '180px', // Ajusta la altura para celulares
                        },
                      }}
                    />
                  </Card>
                </Grid>
              ))}
          </Slider>
        </Grid>
      ))}
    </div>
  );
}

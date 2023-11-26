import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardMedia, Grid, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import marcas from '../mock/marcas';
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

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
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
    <div style={{ width: '100%', padding: '3rem 0' }}>
      <Typography variant='h4' align='center' sx={{ paddingTop: '2rem' }}>
        ALGUNAS DE NUESTROS PRODUCTOS
      </Typography>
      <hr style={{ width: '40%' }} />
      <Slider {...settings} style={{ margin: '0.5 1rem' }}>
        {marcas.map((marca) => (
          <Grid key={marca.id}>
            <Card style={{ border: '1px solid #e0e0e0', margin: '0.5rem' }}>
              <CardMedia
                component='img'
                alt=''
                height='280'
                image={marca.images}
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
    </div>
  );
}

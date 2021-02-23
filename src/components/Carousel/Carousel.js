import React from 'react'
import Slider from 'infinite-react-carousel';

const Carousel = ({elements,autoplay,autoplaySpeed,slidesToShow,wheel}) => (
  <Slider
    dots
    autoplay={autoplay}
    autoplaySpeed={autoplaySpeed}
    slidesToShow={slidesToShow}
    wheel={wheel}
    centerMode
  >
    {
         elements
    }
  </Slider>
        
    )

export default Carousel

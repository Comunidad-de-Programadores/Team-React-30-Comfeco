import React from 'react'
import Slider from 'infinite-react-carousel';

const Carousel = ({elements,autoplay,autoplaySpeed,slidesToShow,wheel,arrows}) => (
  <Slider
    dots
    autoplay={autoplay}
    autoplaySpeed={autoplaySpeed}
    slidesToShow={slidesToShow}
    wheel={wheel}
    centerMode
    arrows={arrows}
  >
    {
         elements
    }
  </Slider>
        
    )

export default Carousel

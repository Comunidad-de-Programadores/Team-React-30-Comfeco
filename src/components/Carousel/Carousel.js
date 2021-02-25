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
    centerPadding={100}
  >
    {
         elements
    }
  </Slider>
        
    )

export default Carousel

import React from 'react'
import Slider from 'infinite-react-carousel';

const Carousel = ({elements,autoplay,autoplaySpeed,slidesToShow,wheel}) => (
  <Slider
    dots
    autoplay={autoplay}
    autoplaySpeed={autoplaySpeed}
    slidesToShow={slidesToShow}
    wheel={wheel}
  >
    {elements.map((element) => {
            const Element = element;
            return <Element />
         })}
  </Slider>
        
    )

export default Carousel

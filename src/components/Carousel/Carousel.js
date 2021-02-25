import React from 'react';
import Slider from 'infinite-react-carousel';

const Carousel = ({
  elements,
  autoplay,
  autoplaySpeed,
  slidesToShow,
  wheel,
  arrows,
  centerPadding
}) => (
  <Slider
    dots
    autoplay={autoplay}
    autoplaySpeed={autoplaySpeed}
    slidesToShow={slidesToShow}
    wheel={wheel}
    centerMode
    arrows={arrows}
    centerPadding={centerPadding}
  >
    {elements}
  </Slider>
);

export default Carousel;

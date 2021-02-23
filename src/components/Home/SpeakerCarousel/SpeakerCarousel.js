/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import useGet from '../../../hooks/useGet';
import Carousel from '../../Carousel/Carousel';
import SpeakerCard from '../SpeakerCard/SpeakerCard';
import './speakerCarousel.css';

const SpeakerCarousel = () => {
  const [data, fetching, error] = useGet('speakers');
  if (fetching || error) return null;

  const speakerCards = data.map((speaker) => (
    <div className="carousel-speaker-item">
      <SpeakerCard {...speaker} key={speaker.id} />
    </div>
  ));

  if (data) {
    return (
      <Carousel
        elements={speakerCards}
        autoplay
        autoplaySpeed={2000}
        slidesToShow={1}
        wheel
        arrows={false}
      />
    );
  }

  return null;
};
export default SpeakerCarousel;

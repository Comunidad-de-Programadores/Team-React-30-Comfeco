/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import useGet from '../../../hooks/useGet';
import Carousel from '../../Carousel/Carousel';
import Sponsor from '../Sponsor/Sponsor'

const SponsorCaroulse = () => {
    const [data, fetching, error] = useGet('sponsors');
    if (fetching || error) return null;

    const sponsorCards = data.map((sponsor) => (
      <div className="carousel-speaker-item" key={sponsor.id}>
        <Sponsor {...sponsor}  />
      </div>
      ));
      if (data) {
        return (
          <Carousel
            elements={sponsorCards}
            autoplay={false}
            slidesToShow={4}
            wheel
            arrows
            centerPadding={100}
          />
        );
      }
    
      return null;
}

export default SponsorCaroulse

import React from 'react'
import useGet from '../../../hooks/useGet';
import Carousel from '../../Carousel/Carousel';
import SpeakerCard from "../SpeakerCard/SpeakerCard";
import './speakerCarousel.css';

const SpeakerCarousel = () => {
    const [data, fetching, error] = useGet("speakers");
    if (fetching || error) return null;
    // eslint-disable-next-line react/jsx-props-no-spreading
    const speakerCards = data.map((speaker) =>  <SpeakerCard {...speaker} key={speaker.id} />);
    return <Carousel elements={speakerCards} autoplay={false} autoplaySpeed={2000} slidesToShow={1} wheel />

}
export default SpeakerCarousel

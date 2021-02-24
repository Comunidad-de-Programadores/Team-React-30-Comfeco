import React from 'react';
import './home.css';
import { Timer } from '../../components/Layout/Timer/Timer';
import ComunityList from '../../components/Home/Comunity/CommunityList/CommunityList';
import SpeakerCarousel from '../../components/Home/SpeakerCarousel/SpeakerCarousel';
import SponsorCaroulse from '../../components/Home/SponsorCarousel/SponsorCaroulse';

export const Home = () => (
  <>
    <div className="home">
      <section className="home-grid">
        <div className="left">
          <ComunityList />
        </div>
        <div className="right">
          <div className="home-description wrapper">
            <p className="home-description title">
              Bienvenido a Comunity Fest and Code
            </p>
            <p className="home-description subtitle">
              ¡Conoce gente, aprende y gana!
            </p>
            <p className="home-description text">
              La próxima edición regresa en el 2022, en la cual se planea
              involucrar a todos los programadores independientemente del area
              de conocimiento que se encuentre, todo con un mismo propósito,
              aprender en comunidad.
            </p>
          </div>
          <SpeakerCarousel />
          
          <SponsorCaroulse />
          { /* TODO: Carousel de sponsors */ }
        </div>
      </section>
    </div>
    <Timer />
  </>
);

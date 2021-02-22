import React, { useState, useEffect } from 'react';
import './home.css';
import { Timer } from '../../components/Layout/Timer/Timer';

export const Home = () => {
  const [timeLeft, setTimeLeft] = useState(3.154e7);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = timeLeft - 1;
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="home">
        <div className="home-description">
          <p className="home-description title">
            Bienvenido a Comunity Fest and Code
          </p>
          <p className="home-description subtitle">
            ¡Conoce gente, aprende y gana!
          </p>
          <p className="home-description text">
            La próxima edición regresa en el 2022, en la cual se planea
            involucrar a todos los programadores independientemente del area de
            conocimiento que se encuentre, todo con un mismo propósito, aprender
            en comunidad.
          </p>
        </div>
        <section className="home-grid">
          <div>Col1</div>
          <div>Col2</div>
        </section>
      </div>
      <Timer seconds={timeLeft} />
    </>
  );
};

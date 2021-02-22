import React from 'react';

import './timer.css';

const decomposeTime = (seconds) => {
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const sec = Math.floor(seconds % 60);

  return { days, hours, minutes, sec };
};

export const Timer = ({ seconds }) => {
  const { days, hours, minutes, sec } = decomposeTime(seconds);

  return (
    <section className="timer">
      <div className="timer-content">
        <div className="timer-section day">
          <h3>{days < 10 ? `0${days}` : days}</h3>
          <p>Dias</p>
        </div>

        <div className="timer-section hour">
          <h3>{hours < 10 ? `0${hours}` : hours}</h3>
          <p>Horas</p>
        </div>

        <div className="timer-section minute">
          <h3>{minutes < 10 ? `0${minutes}` : minutes}</h3>
          <p>Minutos</p>
        </div>

        <div className="timer-section seconds">
          <h3>{sec < 10 ? `0${sec}` : sec}</h3>
          <p>Segundos</p>
        </div>
      </div>
    </section>
  );
};

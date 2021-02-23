import React, { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';

import './timer.css';

const decomposeTime = (seconds) => {
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const sec = Math.floor(seconds % 60);

  return { days, hours, minutes, sec };
};

const getTimeLeft = (date) => {
  if (!date) return 0;

  const splited = date.split('-');
  const today = new Date();
  const eventDate = new Date(splited[0], splited[1] - 1, splited[2]);
  return Math.abs((today.getTime() - eventDate.getTime()) / 1000);
};

export const Timer = () => {
  const [data, fetching, error] = useGet('events');
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    sec: 0,
  });

  const { days, hours, minutes, sec } = time;

  useEffect(() => {
    const interval = setInterval(() => {
      if (data && data.length > 0) {
        const timeLeft = getTimeLeft(data[0].date);
        const parts = decomposeTime(timeLeft);
        const newTime = { ...time };
        Object.assign(newTime, parts);
        setTime(newTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [data]);

  if (fetching || error) return null;

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

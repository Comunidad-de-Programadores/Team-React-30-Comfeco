import React from 'react';

import './timer.css';

export const Timer = () => (
  <section className="timer">
    <div className="timer-content">
      <div className="timer-section day">
        <h3>365</h3>
        <p>Dias</p>
      </div>

      <div className="timer-section hour">
        <h3>00</h3>
        <p>Horas</p>
      </div>

      <div className="timer-section minute">
        <h3>00</h3>
        <p>Minutos</p>
      </div>

      <div className="timer-section seconds">
        <h3>00</h3>
        <p>Segundos</p>
      </div>
    </div>
  </section>
);

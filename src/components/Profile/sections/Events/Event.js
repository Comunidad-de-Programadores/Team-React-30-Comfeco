import React from 'react';
import './Events.css';

const Event = ({ img, description }) => (
  <li className="cards__item">
    <div className="card">
      <img
        src={img}
        width="486px"
        height="200px"
        alt="evento"
        className="card__image"
      />
      <div className="card__content">
        <p className="card__text">{description}</p>
        <div className="card__footer">
          <spam href="#" className="info">
            Más información
          </spam>
          <button type="button" className="btn btn--block card__btn">
            Button
          </button>
        </div>
      </div>
    </div>
  </li>
);

export default Event;

import React from 'react';
import './Event.css';

const Event = ({ id, image, description,openModalHandler }) => (
  <li className="cards__item">
    <div className="card">
      <img
        src={image.url}
        width="486px"
        height="200px"
        alt="evento"
        className="card__image"
      />
      <div className="card__content">
        <p className="card__text">{description}</p>
        <div className="card__footer">
          <button type="button" className="btn btn--block card__btn" onClick={()=>openModalHandler(id)}>
            Participar
          </button>
        </div>
      </div>
    </div>
  </li>
);

export default Event;
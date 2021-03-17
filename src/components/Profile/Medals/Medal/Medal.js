import React from 'react';
import './Medal.css';

const Medal = ({ img, name, description, descriptionTwo }) => (
  <li className="cards__item">
    <div className="card">
      <img
        src={img}
        alt="insignia"
        width="90px"
        height="90px"
        className="card__image__Medals"
      />

      <div className="card__content">
        <div className="card__title">{name}</div>
        <div className="card__subtitle">Descripcion</div>
        <p className="card__text">{description}</p>
        <hr />
        <div className="card__subtitle">Como Ganarla?</div>
        <p className="card__text">{descriptionTwo}</p>
      </div>
    </div>
  </li>
);

export default Medal;

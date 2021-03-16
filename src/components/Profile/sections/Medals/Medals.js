import React from 'react';
import './Medals.css';

const Medals = () => (
  <div>
    <ul className="cards">
      <li className="cards__item">
        <div className="card">
          <div className="card__image__Medals card__image--fence" />
          <div className="card__content">
            <div className="card__title">Flex</div>
            <div className="card__subtitle">Descripcion</div>
            <p className="card__text">
              This is the shorthand for flex-grow, flex-shrink and flex-basis
              combined. The second and third parameters (flex-shrink and
              flex-basis) are optional. Default is 0 1 auto
            </p>
            <hr />
            <div className="card__subtitle">Descripcion</div>
            <p className="card__text">
              This is the shorthand for flex-grow, flex-shrink and flex-basis
              combined. The second and third parameters (flex-shrink and
              flex-basis) are optional. Default is 0 1 auto
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

export default Medals;

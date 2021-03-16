import React from 'react';
import './Events.css';

const Events = () => (
  <div>
    <ul className="cards">
      <li className="cards__item">
        <div className="card">
          <div className="card__image card__image--Events" />
          <div className="card__content">
            <p className="card__text">
              This is the shorthand for flex-grow, flex-shrink and flex-basis
              combined. The second and third parameters (flex-shrink and
              flex-basis) are optional. Default is 0 1 auto
            </p>
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
    </ul>
  </div>
);

export default Events;

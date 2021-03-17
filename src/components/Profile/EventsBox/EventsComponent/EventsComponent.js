/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import './EventsComponent.css';
import Event from '../Event/Event';
import useGet from '../../../../hooks/useGet';

const Events = ({openModalHandler}) => {
  const [data] = useGet('events');

  return (
    <div>
      <ul className="cards">
        {data.map((event) => (
          <Event key={event.id} {...event} openModalHandler={openModalHandler} />
        ))}
      </ul>
    </div>
  );
};

export default Events;
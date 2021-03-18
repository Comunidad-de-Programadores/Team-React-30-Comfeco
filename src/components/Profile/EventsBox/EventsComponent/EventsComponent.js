/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import './EventsComponent.css';
import Event from '../Event/Event';
import useGet from '../../../../hooks/useGet';

const Events = ({ openModalHandler }) => {
  const [data, fetchingData, errorData] = useGet('events');
  const [userData, fetching, error] = useGet('users/me');

  if (fetching || error || fetchingData || errorData) return null;

  const { events } = userData;

  return (
    <div>
      <ul className="cards">
        {data.map((event) => {
          let isMember = false;
          events.forEach((e) => {
            if (e === event.id) isMember = true;
          });
          return (
            <Event
              key={event.id}
              {...event}
              openModalHandler={openModalHandler}
              isMember={isMember}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Events;

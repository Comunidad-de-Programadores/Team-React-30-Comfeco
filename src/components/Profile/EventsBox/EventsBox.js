/* eslint-disable react/jsx-props-no-spreading */
import './EventsBox.css';
import React from 'react';
import { useSelector } from '../../../context/selector';
import useGet from '../../../hooks/useGet';
import Event from './Event/Event';

export default function EventsBox() {
  const { goTo } = useSelector();
  const [data, fetchingData, errorData] = useGet('events');
  const [userData, fetching, error] = useGet('users/me');

  if (fetching || error || fetchingData || errorData) return null;

  const { events } = userData;

  return (
    <div id="Events-box">
      <div id="Events-title">
        <h5 id="">Eventos de tu interes</h5>
        <button type="button" id="Events-more" onClick={() => goTo('events')}>
          Ver mas
        </button>
        <div>
          {data.map((event) => {
            if (events.includes(event.id))
              return <Event key={event.id} {...event} isMember />;
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

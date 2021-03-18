import './activity.css';

import React from 'react';
import { useAuth } from '../../../context/auth';
import useGet from '../../../hooks/useGet';

export default function Activity() {
  const { user } = useAuth();
  const { id: userId } = user;
  const [data, fetching, error] = useGet(`activities?user=${userId}`);

  if (fetching || error) return null;

  return (
    <>
      <h5 id="activity-title">Actividad Reciente</h5>
      {data.map((activity) => (
        <div key={activity.id}>
          <div id="activity">
            <p id="activity-text">
              Te has Unido al evento {activity.event_name}
            </p>
            <div id="activity-calendar">
              <img src="calendar.svg" alt="calendar" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

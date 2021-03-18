import React from 'react';
import { useAuth } from '../../../../context/auth';
import http from '../../../../utils/http';
import './Event.css';

const Event = ({
  id,
  image,
  name,
  description,
  openModalHandler,
  isMember,
}) => {
  const { user } = useAuth();
  const { id: userId } = user;

  const updateUser = (eventId) => {
    http.put(`events/${id}`, { users: [userId] });
    http.post(`activities`, {
      event_name: name,
      user: [userId],
    });
    openModalHandler(eventId);

  };

  return (
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
            {!isMember && (
              <button
                type="button"
                className="btn btn--block card__btn"
                onClick={() => updateUser(id)}
              >
                Participar
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Event;

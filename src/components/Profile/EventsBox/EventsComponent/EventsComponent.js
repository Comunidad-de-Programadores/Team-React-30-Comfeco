/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';
import './EventsComponent.css';
import Event from '../Event/Event';

const Events = () => {
  const [data] = useState([
    {
      id: 1,
      img: 'https://via.placeholder.com/486x200',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      id: 2,
      img: 'https://via.placeholder.com/486x200',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      id: 3,
      img: 'https://via.placeholder.com/486x200',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      id: 4,
      img: 'https://via.placeholder.com/486x200',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      id: 5,
      img: 'https://via.placeholder.com/486x200',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ]);

  const [dataCopy] = useState(data);

  return (
    <div>
      <ul className="cards">
        {dataCopy.map((event) => (
          <Event key={event.id} {...event} />
        ))}
      </ul>
    </div>
  );
};

export default Events;
/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';
import './MedalsComponent.css';
import Medal from '../Medal/Medal';

const Medals = () => {
  const [data] = useState([
    {
      id: 1,
      img: 'https://via.placeholder.com/90x90',
      name: 'Sociable',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      descriptionTwo:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      id: 2,
      img: 'https://via.placeholder.com/90x90',
      name: 'Sociable',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      descriptionTwo:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      id: 3,
      img: 'https://via.placeholder.com/90x90',
      name: 'Sociable',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      descriptionTwo:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      id: 4,
      img: 'https://via.placeholder.com/90x90',
      name: 'Sociable',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      descriptionTwo:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      id: 5,
      img: 'https://via.placeholder.com/90x90',
      name: 'Sociable',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      descriptionTwo:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ]);

  const [dataCopy] = useState(data);

  return (
    <div>
      <ul className="cards">
        {dataCopy.map((medal) => (
          <Medal key={medal.id} {...medal} />
        ))}
      </ul>
    </div>
  );
};

export default Medals;

/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import './MedalsComponent.css';
import Medal from '../Medal/Medal';
import useGet from '../../../../hooks/useGet';

const Medals = () => {
  const [data] = useGet('insignias')

  return (
    <div>
      <ul className="cards">
        {data.map((medal) => (
          <Medal key={medal.id} {...medal} />
        ))}
      </ul>
    </div>
  );
};

export default Medals;

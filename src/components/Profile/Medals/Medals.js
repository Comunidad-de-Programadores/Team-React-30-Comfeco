import './medals.css';

import React, { useEffect, useState } from 'react';
import useGet from '../../../hooks/useGet';

export default function Medal() {
  const [data, fetching, error] = useGet(`users/me`);
  const [dataInsignias, fetchingInsignias, errorInsignias] = useGet(
    `insignias`
  );
  const [medals, setMedals] = useState([]);

  useEffect(() => {
    if (data) {
      const { insignias } = data;
      const myMedals = [];
      dataInsignias.forEach((medal) => {
        if (insignias.includes(medal.id)) myMedals.push(medal);
      });
      setMedals(myMedals);
    }
  }, [data]);

  if (fetching || error || fetchingInsignias || errorInsignias) return null;

  return (
    <>
      <div id="content">
        <div id="medals">
          <h6 id="medals-title">Insignias</h6>
          <div id="medals-image">
            {medals.map((medal) => (
              <div key={medal.id}>
                <img
                  width="90"
                  height="90"
                  src={medal.image.url}
                  alt={medal.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import Member from './Member/Member';
import './myGroup.css';

const MyGroup = () => {
  const [data] = useState({
    name: 'Grupo',
    users: [
      {
        username: 'Usuario 1',
        isLeader: false,
      },
      {
        username: 'Usuario 2',
        isLeader: false,
      },
      {
        username: 'Usuario 3',
        isLeader: true,
      },
      {
        username: 'Usuario 4',
        isLeader: false,
      },
      {
        username: 'Usuario 5',
        isLeader: false,
      },
    ],
  });

  return (
    <div className="my-group">
      <h4 className="my-group-title">
        <span>Mi grupo:</span> {data && data.name}
      </h4>
      <div className="my-group-members">
        {data && data.users.map((member) => (
          <div key={member.username} className="my-group-member">
            <Member {...member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyGroup;

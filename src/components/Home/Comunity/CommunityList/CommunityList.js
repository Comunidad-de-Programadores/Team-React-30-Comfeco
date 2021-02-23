/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import ComunityItem from '../CommunityItem/CommunityItem';
import useGet from '../../../../hooks/useGet';
import './communityList.css';

export default function CommunityList() {
  const [data, fetching, error] = useGet('communities');

  if (fetching || error) return null;

  if (data) {
    return (
      <div className="community-list">
        <div className="community-list-header">
          <h4>Comunidades</h4>
          <Link to="/communities">ver más</Link>
        </div>
        {data.map((community, index) => (
          <div key={community.id}>
            <ComunityItem {...community} />
            {index < data.length - 1 ? <hr /> : ''}
          </div>
        ))}
      </div>
    );
  }

  return null;
}

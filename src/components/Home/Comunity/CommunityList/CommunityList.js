/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ComunityItem from '../CommunityItem/CommunityItem';
import './communityList.css';

export default function CommunityList({ communities }) {
  return (
    <div className="community-list">
      <div className="community-list-header">
        <h4>Comunidades</h4>
        <a href="/">ver más</a>
      </div>
      {communities.map((community) => (
        <ComunityItem {...community} />
      ))}
    </div>
  );
}

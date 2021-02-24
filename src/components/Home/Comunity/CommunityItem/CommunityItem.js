import React from 'react';
import './communityItem.css';

export default function Community({ image, name, url }) {
  const imageUrl = image ? `${image.url}` : '';
  return (
    <div className="community">
      <div className="community-info">
        <img
          className="community-image"
          src={
            imageUrl
          }
          alt="community"
        />
        <h4 className="community-name">{name}</h4>
      </div>
      <a className="community-link" href={url}>
        Unirse
      </a>
    </div>
  );
}

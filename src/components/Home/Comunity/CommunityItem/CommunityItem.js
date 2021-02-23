import React from 'react';
import { baseURL } from '../../../../utils/http';
import './communityItem.css';

export default function Community({ image, name, url }) {
  return (
    <div className="community">
      <div className="community-info">
        <img
          className="community-image"
          src={
            image ? `${baseURL.substr(0, baseURL.length - 1)}${image.url}` : ''
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

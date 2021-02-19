import React from 'react'
import './communityItem.css';

export default function Community({ image, name, link }) {
    return (
      <div className="community">
        <div className="community-info">
          <img className="community-image" src={image} alt="community" />
          <h4 className="community-name">{ name }</h4>
        </div>
        <a className="community-link" href={link}>Unirse</a>
      </div>
    )
}

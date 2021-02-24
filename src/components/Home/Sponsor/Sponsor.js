import React from 'react'
import './Sponsor.css';

export default function Sponsor({ name, image }) {
  const imageUrl = image ? `${image.url}` : '';
     return (
       <img className="sponsor" src={imageUrl} alt={name} />
    )
}

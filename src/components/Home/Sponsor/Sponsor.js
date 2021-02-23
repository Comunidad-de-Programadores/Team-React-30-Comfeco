import React from 'react'
import './Sponsor.css';

export default function Sponsor({ name, image }) {
    return (
      <img className="sponsor" src={image} alt={name} />
    )
}

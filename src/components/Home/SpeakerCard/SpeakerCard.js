import React from "react";
import "./speakerCard.css";
import { baseURL } from '../../../utils/http';

export default function SpeakerCard({ image, team, name }) {
  const imageUrl = image ? `${baseURL.substr(0, baseURL.length - 1)}${image[0].url}` : '';
  const teamImageUrl = team && team.image ? `${baseURL.substr(0, baseURL.length - 1)}${team.image.url}` : '';
  return (
    <div className="speaker-card">
      <img className="speaker-image" src={imageUrl} alt="profile" />
      <img className="speaker-team" src={teamImageUrl} alt="profile" />
      <div className="speaker-name">
        <p>{name}</p>
      </div>
    </div>
    );
}

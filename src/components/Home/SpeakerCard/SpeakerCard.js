import React from "react";
import "./speakerCard.css";

export default function SpeakerCard({ image, team, name }) {
  const imageUrl = image ? `${image[0].url}` : '';
  const teamImageUrl = team && team.image ? `${team.image.url}` : '';
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

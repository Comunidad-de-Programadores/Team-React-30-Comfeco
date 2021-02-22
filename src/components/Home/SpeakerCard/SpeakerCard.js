import React from "react";
import "./speakerCard.css";

export default function SpeakerCard({ image, team, name }) {
  return (
    <div className="speaker-card">
      <img className="speaker-image" src={image} alt="profile" />
      <img className="speaker-team" src={team} alt="profile" />
      <div className="speaker-name">
        <p>{name}</p>
      </div>
    </div>
  );
}

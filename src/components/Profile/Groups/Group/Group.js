import React from 'react';
import './group.css'

const Group = ({ image, name, language }) => (
  <div className="group-card">
    <img src={image[0].url} alt="group" className="group-image" />
    <h4 className="group-language">{language}</h4>
    <h3 className="group-name">{name}</h3>
  </div>
);

export default Group;

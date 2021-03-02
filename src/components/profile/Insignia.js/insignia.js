import './Insignia.css'

import React from 'react'

export const Insignia = () => {
    return (
        <>
        <div id="content">
        <div id="insignias">
          <h6 id="insignias-title">Insignias</h6>
          <div id="insignias-image">
          <img id="" src="https://via.placeholder.com/90x90"></img>
          <img id="" src="https://via.placeholder.com/90x90"></img>
          <img id="" src="https://via.placeholder.com/90x90"></img>
          <img id="" src="https://via.placeholder.com/90x90"></img>
          </div>
        </div>
        
        <h5 id="activity-title">Actividad Reciente</h5>
        <div id="activity">
          
          <p id="activity-text">Te has Unido al evento Community Fest and Code</p>
          <div id="activity-calendar"><img src="calendar.svg"></img></div>
        
        </div>
        </div>
        </>
      );
}


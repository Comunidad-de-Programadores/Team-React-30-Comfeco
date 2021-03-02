import './ProfileBox.css'

import React from 'react'

export const ProfileBox = () => {
    return (
        <>
        <div id="container">
        <div id="profile">
        <a id="profile-edit" href="#">Editar Perfil</a>
        <br></br>
        <div id="profile-photo"><img src="https://via.placeholder.com/190x190"></img></div>
        <h5 id="profile-title">Nick del usuario</h5>
        <p id="profile-job">Frontend Developer/ UI/UX</p>
        <p id="profile-description">
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) 
        desconocido usó una galería de textos y los mezcló de tal manera que logró hacer
        </p>
        <hr id="profile-line"></hr>
        <div id="profile-image">
        <img className="profile-image" src="https://via.placeholder.com/40x40"></img>
        <img className="profile-image" src="https://via.placeholder.com/40x40"></img>
        <img className="profile-image" src="https://via.placeholder.com/40x40"></img>
        <img className="profile-image" src="https://via.placeholder.com/40x40"></img>
        </div>
        </div>      
        </div>
        
      
    
     
        </>
      );
}
import './subMenu.css'

import React from 'react'

export const SubMenu = () => (
  <>
    <div className="rectangulo">
      <botton className="miperfilbotton">
        <i className="fa fa-user icono" />
        <span className="letras">
          Mi Perfil
        </span>
      </botton>
      <botton className="insigniasbotton">
        <i className="fa fa-trophy icono" />
        <span className="letras">
          Insignias
        </span>
      </botton>
      <botton className="gruposbotton">
        <i className="fa fa-users icono" />
        <span className="letras">
          Grupos
        </span>
      </botton>
      <botton className="eventosbotton">
        <i className="fa fa-calendar icono" />
        <span className="letras">
          Eventos
        </span>
      </botton>
    </div>
  </>
    )

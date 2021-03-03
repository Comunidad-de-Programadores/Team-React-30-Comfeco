import './subMenu.css';

import React, { useState } from 'react';

import Person from '../../Icons/Person';
import People from '../../Icons/People';
import Trophy from '../../Icons/Trophy';
import Calendar from '../../Icons/Calendar';
import ArrowDown from '../../Icons/Arrows/ArrowDown';
import ArrowUp from '../../Icons/Arrows/ArrowUp';

export const SubMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(value => !value);
  };

  const classes = ['menu'];

  if (isOpen) {
      classes.push('open');
  }

  return (
    <>
      <div className="submenu">
        <div className="toggle-submenu">
          <span>Menú</span>
          <span className="toggle-submenu-button" role="button" onClick={open} tabIndex={0} onKeyDown={open}>
            { !isOpen ? <ArrowDown /> : <ArrowUp /> }
          </span>
        </div>
        <div className={classes.join(' ')}>
          <button id="profile" type="button" className="submenu-button">
            <span className="submenu-button-icon">
              <Person />
            </span>
            <span>Mi Perfil</span>
          </button>
          <button id="trophies" type="button" className="submenu-button">
            <span className="submenu-button-icon">
              <Trophy />
            </span>
            <span>Insignias</span>
          </button>
          <button id="groups" type="button" className="submenu-button">
            <span className="submenu-button-icon">
              <People />
            </span>
            <span>Grupos</span>
          </button>
          <button id="events" type="button" className="submenu-button">
            <span className="submenu-button-icon">
              <Calendar />
            </span>
            <span>Eventos</span>
          </button>
        </div>
      </div>
    </>
  );
};

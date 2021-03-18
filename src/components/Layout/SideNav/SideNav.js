import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../Icons/Menu';
import './sidenav.css';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const style = ['side-nav'];

  if (isOpen) {
    style.push('open');
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="button-open"
      >
        <Menu />
      </button>
      <div className={style.join(' ')}>
        <div className="side-nav-content">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="button-close"
          >
            &#10006;
          </button>
          <div className="links">
            <Link to="/home" onClick={() => setIsOpen(false)}>
              Inicio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;

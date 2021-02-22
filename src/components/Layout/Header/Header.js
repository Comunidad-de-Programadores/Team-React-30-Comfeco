import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './header.css';
import Logo from '../../../assets/images/logo_horizontal.png';

export const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <Link to="/" className="header-link">
        <img src={Logo} alt="Logo Confeco" />
      </Link>

      {location.pathname === '/auth' ? (
        <div className="header-message">&lt;&gt;HolaMundo&lt;/&gt;</div>
      ) : (
        ''
      )}
      {location.pathname === '/password-reset' ? (
        <Link to="/" className="link">Regresar al login</Link>
      ) : (
        ''
      )}
    </header>
  );
};

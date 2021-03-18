import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/auth';

import './header.css';
import Logo from '../../../assets/images/logo_horizontal.png';
import SideNav from '../SideNav/SideNav';
import UserMenu from './UserMenu/UserMenu';

export const Header = () => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="header-link">
          <img src={Logo} alt="Logo Confeco" />
        </Link>

        {isLoggedIn() && (
          <>
            <div className="side-nav-wrapper">
              <SideNav />
            </div>
            <div className="header-links">
              <Link className="link" to="/home">
                Inicio
              </Link>
            </div>
          </>
        )}
      </div>

      {isLoggedIn() && (
        <div className="header-right">
          <UserMenu />
        </div>
      )}

      {location.pathname === '/auth' ? (
        <div className="header-message">&lt;&gt;HolaMundo&lt;/&gt;</div>
      ) : (
        ''
      )}
      {location.pathname === '/password-reset' ? (
        <Link to="/" className="link">
          Regresar al login
        </Link>
      ) : (
        ''
      )}
    </header>
  );
};

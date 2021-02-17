import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import Logo from '../../../assets/images/logo_horizontal.png';

export const Header = () => (
  <header className="header">
    <Link to="/" className="header-link">
      <img src={Logo} alt="Logo Confeco" />
    </Link>

    <div className="header-message">&lt;&gt;HolaMundo&lt;/&gt;</div>
  </header>
);

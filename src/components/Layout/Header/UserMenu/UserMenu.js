import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../../context/auth';
import ArrowDown from '../../../Icons/Arrows/ArrowDown';
import User from '../../../Icons/User';
import './userMenu.css';

const UserMenu = () => {
  const history = useHistory();
  const { user, logout } = useAuth();
  const { nick } = user || { nick: 'Usuario' };

  const logoutHandler = () => {
    logout();
    history.push('/auth');
  };

  return (
    <div className="user-menu">
      <span className="user-notification">&#128276;</span>
      <div className="user-dropdown">
        <div className="user-dropdown-box">
          <div className="user-icon-box">
            <User width={20} height={20} />
          </div>
          <span>{nick}</span>
          <ArrowDown />
        </div>
        <div className="user-dropdown-content">
          <span
            onClick={logoutHandler}
            role="button"
            tabIndex={0}
            onKeyDown={logoutHandler}
          >
            Cerrar sesión
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;

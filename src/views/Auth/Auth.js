import React, { useState } from 'react';
import { Login } from '../../components/Login/Login';
import { Register } from '../../components/Register/Register';

import Logo from '../../assets/images/logo_horizontal.png';
import './auth.css';

export const Auth = () => {
  const [textButton, setTextButton] = useState('Registrarme');
  const [classButton, setClassButton] = useState('');

  const handleTextButton = () => {
    if (textButton === 'Iniciar Sesión') {
      setTextButton('Registrarme');
      setClassButton('');
    } else {
      setTextButton('Iniciar Sesión');
      setClassButton('login-button');
    }
  };

  return (
    <main className="auth">
      <div className="auth-container">
        <section className="auth-forms">
          <figure>
            <img src={Logo} alt="Logo Confeco" />
          </figure>
          {textButton === 'Iniciar Sesión' ? <Register /> : <Login />}
        </section>

        <button
          type="button"
          className={`auth-button ${classButton}`}
          onClick={handleTextButton}
        >
          {textButton}
        </button>
      </div>
    </main>
  );
};

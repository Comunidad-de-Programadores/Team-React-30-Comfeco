import React, { useState } from 'react';
import { Login } from '../../components/Login/Login';
import { Register } from '../../components/Register/Register';
import useModal from '../../hooks/useModal';
import Logo from '../../assets/images/logo_horizontal.png';
import './auth.css';
import TermsModal from '../../components/TermsModal/TermsModal';

export const Auth = () => {
  const [textButton, setTextButton] = useState('Registrarme');
  const [classButton, setClassButton] = useState('');

  const [isOpenModal, openModal, closeModal] = useModal();

  const handleTextButton = () => {
    if (textButton === 'Iniciar Sesión') {
      setTextButton('Registrarme');
      setClassButton('');
    } else {
      setTextButton('Iniciar Sesión');
      setClassButton('login-button');
    }
  };

  if (isOpenModal) {
    return <TermsModal isOpenModal={isOpenModal} closeModal={closeModal} />;
  }

  return (
    <main className="auth">
      <div className="auth-container">
        <section className="auth-forms">
          <figure>
            <img src={Logo} alt="Logo Confeco" />
          </figure>
          {textButton === 'Iniciar Sesión' ? (
            <Register openModal={openModal} />
          ) : (
            <Login />
          )}
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

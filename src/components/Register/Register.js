import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Swal from 'sweetalert2';
import TermsModal from '../TermsModal/TermsModal'

import { registerSchema } from '../../validations/auth';
import http from '../../utils/http';
import { useAuth } from '../../context/auth';
import useModal from '../../hooks/useModal';

export const Register = () => {
  const [isOpenModal, openModal, closeModal] = useModal();
  const { setToken } = useAuth();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const registerUser = async ({
    registerNick,
    registerEmail,
    registerPassword,
  }) => {
    try {
      const response = await http.post('auth/local/register', {
        username: registerNick,
        email: registerEmail,
        password: registerPassword,
      });

      if (response.data.jwt) {
        setToken(response.data.jwt);
        Swal.fire({
          title: 'Genial!',
          text: 'Acabas de unirte a Confeco',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });

        reset();
      }
    } catch (error) {
      Swal.fire({
        title: 'Que mal!',
        text: error.response.data.message[0].messages[0].message,
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(registerUser)}>
        <h3 className="form-title">Registrarme</h3>

        <label htmlFor="registerNick" className="form-label">
          Nick
          <input
            type="text"
            id="registerNick"
            name="registerNick"
            className="form-input"
            ref={register}
          />
        </label>
        <div className="form-error">{errors.registerNick?.message}</div>

        <label htmlFor="registerEmail" className="form-label">
          Correo Electronico
          <input
            type="email"
            id="registerEmail"
            name="registerEmail"
            className="form-input"
            ref={register}
          />
        </label>
        <div className="form-error">{errors.registerEmail?.message}</div>

        <label htmlFor="registerPassword" className="form-label">
          Contraseña
          <input
            type="password"
            id="registerPassword"
            name="registerPassword"
            className="form-input"
            ref={register}
          />
        </label>
        <div className="form-error">{errors.registerPassword?.message}</div>

        <label htmlFor="registerRepeat" className="form-label">
          Repetir Contraseña
          <input
            type="password"
            id="registerRepeat"
            name="registerRepeat"
            className="form-input"
            ref={register}
          />
        </label>
        <div className="form-error">{errors.registerRepeat?.message}</div>

        <label htmlFor="terms" className="form-label form-terms">
          <div className="form-container-terms">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              className="form-checkbox"
            />
          
            <button className="link-button" type="button" onClick={openModal}>
              Acepto los <strong>terminos y condiciones</strong>,{' '}
              <strong>politica de privacidad</strong> y{' '}
              <strong>protección de datos</strong>
            </button>
          </div>
        </label>

        <button type="submit" className="button button-yellow form-button">
          Registarme
        </button>
      </form>

      <TermsModal isOpenModal={isOpenModal} closeModal={closeModal} />
    </>
  );
};

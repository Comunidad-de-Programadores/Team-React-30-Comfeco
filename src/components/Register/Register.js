import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { registerSchema } from '../../validations/auth';
import { useAuth } from '../../context/auth';
import { errorAlert, successAlert } from '../../alerts';

export const Register = () => {
  const { register: registerUser } = useAuth();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const handleRegister = async ({
    registerNick: username,
    registerEmail: email,
    registerPassword: password,
  }) => {
    const { error } = await registerUser({ username, email, password });

    if (error) {
        errorAlert(error);
      } else {
        reset();
        successAlert('Acabas de unirte a Confeco');
      }
  };

  return (
    <form className="form" onSubmit={handleSubmit(handleRegister)}>
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
        <input
          type="checkbox"
          name="terms"
          id="terms"
          className="form-checkbox"
          ref={register}
        />
        Acepto los <strong>terminos y condiciones</strong>,{' '}
        <strong>politica de privacidad</strong> y{' '}
        <strong>protección de datos</strong>
      </label>
      <div className="form-error">{errors.terms?.message}</div>

      <button type="submit" className="button button-yellow form-button">
        Registarme
      </button>
    </form>
  );
};

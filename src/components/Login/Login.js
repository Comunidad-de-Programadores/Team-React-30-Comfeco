import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../validations/auth';
import { useAuth } from '../../context/auth';
import { errorAlert, messageAlert } from '../../utils/alerts';

export const Login = () => {
  const { login } = useAuth();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = async ({
    loginEmail: identifier,
    loginPassword: password,
  }) => {
    const { error } = await login({ identifier, password });

    if (error) {
      errorAlert(error);
    } else {
      reset();
      messageAlert('success', 'Acabas de iniciar sesión');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(handleLogin)}>
      <h3 className="form-title">Iniciar Sesión</h3>

      <label htmlFor="loginEmail" className="form-label">
        Correo Electronico
        <input
          type="email"
          id="loginEmail"
          name="loginEmail"
          className="form-input"
          ref={register}
        />
      </label>
      <div className="form-error">{errors.loginEmail?.message}</div>

      <label htmlFor="loginPassword" className="form-label">
        Contraseña <span>¿Olvido su contraseña?</span>
        <input
          type="password"
          id="loginPassword"
          name="loginPassword"
          className="form-input"
          ref={register}
        />
      </label>
      <div className="form-error">{errors.loginPassword?.message}</div>

      <button type="submit" className="button button-yellow form-button">
        Ingresar
      </button>
    </form>
  );
};

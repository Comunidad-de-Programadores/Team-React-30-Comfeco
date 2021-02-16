import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Swal from 'sweetalert2';

import { loginSchema } from '../../validations/auth';
import http from '../../utils/http';
import { useAuth } from '../../context/auth';

export const Login = () => {
  const { setData } = useAuth();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = async ({
    loginEmail: identifier,
    loginPassword: password,
  }) => {
    try {
      const response = await http.post('auth/local', {
        identifier,
        password,
      });

      if (response.data.jwt) {
        setData({
          token: response.data.jwt,
          user: response.data.user.username,
        });
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

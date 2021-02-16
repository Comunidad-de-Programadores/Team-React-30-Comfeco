import React from 'react';


export const Login = () => (
  <>
    <form className="form">
      <h3 className="form-title">Iniciar Sesión</h3>

      <label htmlFor="login-email" className="form-label">
        Correo Electronico
        <input
          type="email"
          id="login-email"
          name="login-email"
          className="form-input"
        />
      </label>

      <label htmlFor="login-password" className="form-label">
        Contraseña <span>¿Olvido su contraseña?</span>
        <input
          type="password"
          id="login-password"
          name="login-password"
          className="form-input"
        />
      </label>

      <button type="submit" className="button button-yellow form-button">
        Ingresar
      </button>
    </form>
      
  </>
);

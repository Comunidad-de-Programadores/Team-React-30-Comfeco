import React from 'react';

export const Register = () => (
  <form className="form">
    <h3 className="form-title">Registrarme</h3>

    <label htmlFor="register-nick" className="form-label">
      Nick
      <input
        type="text"
        id="register-nick"
        name="register-nick"
        className="form-input"
      />
    </label>

    <label htmlFor="register-email" className="form-label">
      Correo Electronico
      <input
        type="email"
        id="register-email"
        name="register-email"
        className="form-input"
      />
    </label>

    <label htmlFor="register-password" className="form-label">
      Contraseña
      <input
        type="password"
        id="register-password"
        name="register-password"
        className="form-input"
      />
    </label>

    <label htmlFor="register-repeat" className="form-label">
      Repetir Contraseña
      <input
        type="password"
        id="register-repeat"
        name="register-repeat"
        className="form-input"
      />
    </label>

    <button type="submit" className="button button-yellow form-button">
      Ingresar
    </button>
  </form>
);

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { passwordResetSchema as schema } from '../../../validations/auth';

export default function PasswordReset() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {};

  return (
    <main className="auth">
      <div className="auth-container">
        <section className="auth-forms">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="form-title">Cambiar Contraseña</h3>

            <label htmlFor="resetPassword" className="form-label">
              Nueva Contraseña
              <input
                type="password"
                id="resetPassword"
                name="resetPassword"
                className="form-input"
                ref={register}
              />
            </label>
            <div className="form-error">{errors.resetPassword?.message}</div>

            <label htmlFor="resetRepeat" className="form-label">
              Repetir Contraseña
              <input
                type="password"
                id="resetRepeat"
                name="resetRepeat"
                className="form-input"
                ref={register}
              />
            </label>
            <div className="form-error">{errors.resetRepeat?.message}</div>

            <button type="submit" className="button button-yellow form-button">
              Cambiar Contraseña
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

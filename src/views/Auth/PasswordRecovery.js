import './Auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { passwordRecoverySchema as schema } from '../../validations/auth';

export default function PasswordRecovery() {
  const [emailSend, setEmailSend] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
      setEmailSend(true);
      reset();
  };

  return (
    <main className="auth">
      <div className="auth-container">
        <section className="auth-forms">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="form-title">Recuperar Contraseña</h3>

            <p>
              Por favor, ingrese su correo para poder enviar el correo de
              recuperación
            </p>

            <label htmlFor="recoveryEmail" className="form-label">
              Correo Electronico
              <input
                type="recoveryEmail"
                id="recoveryEmail"
                name="recoveryEmail"
                className="form-input"
                ref={register}
              />
            </label>
            <div className="form-error">{errors.recoveryEmail?.message}</div>
            { emailSend ? <p className="form-text message">Correo Enviado</p> : '' }

            <button type="submit" className="button button-yellow form-button">
              Recuperar Contraseña
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

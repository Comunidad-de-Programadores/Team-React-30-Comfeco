import React from 'react';
import  Modal  from '../Modal/Modal';
import useGet from '../../hooks/useGet';
import useModal from '../../hooks/useModal';
import  Loading  from '../Loading';

export const Login = () => {
  const [isOpenModal, openModal, closeModal] = useModal();
  const [data, fetching] = useGet('terms-and-conditions');
  return (
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
          Ingresar
        </button>
      </form>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        {fetching && <Loading />}
        {data && data[0]?.description}
      </Modal>
    </>
)
  
};

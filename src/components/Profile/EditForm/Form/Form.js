/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import './Form.css';
import { useForm } from 'react-hook-form';
import useGet from '../../../../hooks/useGet';
import http from '../../../../utils/http';
import { useAuth } from '../../../../context/auth';

import User from '../../../Icons/User';
import Facebook from '../../../Icons/Logos/Facebook';
import Github from '../../../Icons/Logos/Github';
import Twitter from '../../../Icons/Logos/Twitter';
import LinkedIn from '../../../Icons/Logos/LinkedIn';

/* const Form = ({ onSubmit = (f) => f }) => { */
const Form = () => {
  const { user } = useAuth();
  const [data] = useGet('users/me');
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    reset({
      username: data.username || '',
      email: data.email || '',
      gender: data.gender || '',
      birthDate: data.birthDate || '',
      country: data.country || '',
      facebookAccount: data.facebookAccount || '',
      gitHubAccount: data.gitHubAccount || '',
      linkedinAccount: data.linkedinAccount || '',
      twitterAccount: data.twitterAccount || '',
      biography: data.bibliography || '',
      knowledgeArea: data.knowledgeArea || '',
    });
  }, [data]);

  const onSubmit = (formData) => {
    const formDataCopy = { ...formData };
    Object.keys(formDataCopy).forEach((key) => {
      if (formDataCopy[key] === '') {
        delete formDataCopy[key];
      }
    });
   
    http.put(`users/${user.id}`, formDataCopy).then(() => {
      if (Object.keys(formDataCopy).length === 11) {
        http.put(`users/${user.id}`, { insignias: ['60511fc2280e161c34a623ee'] });
      }
    });
  };

  return (
    <div className="edit-form">
      <form className="edit-form form" onSubmit={handleSubmit(onSubmit)}>
        <div className="edit-form user-icon">
          <User width={80} height={80} />
        </div>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="username">Nick</label>
            <input
              type="text"
              name="username"
              id="username"
              ref={register}
              placeholder="nick"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              name="email"
              id="email"
              ref={register}
              placeholder="email"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="gender">Género</label>
            <input
              type="text"
              name="gender"
              id="gender"
              ref={register}
              placeholder="género"
            />
          </div>
          <div className="form-control">
            <label htmlFor="birthDate">Fecha de nacimiento</label>
            <input type="date" name="birthDate" id="birthDate" ref={register} />
          </div>
          <div className="form-control">
            <label htmlFor="country">País</label>
            <input
              type="text"
              name="country"
              id="country"
              ref={register}
              placeholder="país"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="knowledgeArea">Area de conocimiento</label>
            <select id="knowledgeArea" name="knowledgeArea" ref={register}>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="devops">DevOps</option>
              <option value="videogame">Video Game Developers</option>
              <option value="ui-ux">UI/UX</option>
              <option value="database">Database Developer</option>
              <option value="cloud">Cloud Computing</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              ref={register}
              placeholder="contraseña"
            />
          </div>
          <div className="form-control">
            <label htmlFor="passwordRepeat">Repetir contraseña</label>
            <input
              type="password"
              name="passwordRepeat"
              id="passwordRepeat"
              ref={register}
              placeholder="confirmar contraseña"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-control account">
            <label htmlFor="facebookAccount" className="account-label">
              <span>
                <Facebook />
              </span>
              <span>facebook.com/</span>
            </label>
            <input
              type="text"
              name="facebookAccount"
              id="facebookAccount"
              ref={register}
              placeholder="facebook"
            />
          </div>
          <div className="form-control account">
            <label htmlFor="githubAccount" className="account-label">
              <span>
                <Github />
              </span>
              <span>github.com/</span>
            </label>
            <input
              type="text"
              name="gitHubAccount"
              id="githubAccount"
              ref={register}
              placeholder="github"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-control account">
            <label htmlFor="linkedInAccount" className="account-label">
              <span>
                <LinkedIn />
              </span>
              <span>linkedin.com/in/</span>
            </label>
            <input
              type="text"
              name="linkedinAccount"
              id="linkedInAccount"
              ref={register}
              placeholder="linkedIn"
            />
          </div>
          <div className="form-control account">
            <label htmlFor="twitterAccount" className="account-label">
              <span>
                <Twitter />
              </span>
              <span>twitter.com/</span>
            </label>
            <input
              type="text"
              name="twitterAccount"
              id="twitterAccount"
              ref={register}
              placeholder="twitter"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="biography">Biografía</label>
            <textarea
              maxLength="140"
              name="biography"
              id="biography"
              ref={register}
              placeholder="biografía"
            />
          </div>
        </div>
        <div className="submit-button-wrapper">
          <button type="submit" className="button button-yellow">
            Editar Perfil
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

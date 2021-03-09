import React from 'react';
import { Link } from 'react-router-dom';
import useGet from '../../../hooks/useGet';

import './ProfileBox.css';

import Facebook from '../../Icons/Logos/Facebook';
import Github from '../../Icons/Logos/Github';
import Twitter from '../../Icons/Logos/Twitter';
import LinkedIn from '../../Icons/Logos/LinkedIn';

export default function ProfileBox() {
  const [data] = useGet('users/me');
  return (
    <>
      <div id="profile">
        <a id="profile-edit" href="/">
          Editar Perfil
        </a>
        <br />
        <div id="profile-photo">
          <img src={data.image?.url} alt={data.username || ''} />
        </div>
        <h5 id="profile-title">{data.username || ''}</h5>
        <p id="profile-job">{data.knowledgeArea || ''}</p>
        <p id="profile-description">{data.bibliography || ''}</p>
        <hr id="profile-line" />
        <div id="profile-image">
          {data.facebookAccount && (
            <Link to={data.facebookAccount}>
              <Facebook />
            </Link>
          )}
          {data.gitHubAccount && (
            <Link to={data.gitHubAccount}>
              <Github />
            </Link>
          )}
          {data.linkedinAccount && (
            <Link to={data.linkedinAccount}>
              <LinkedIn />
            </Link>
          )}
          {data.twitterAccount && (
            <Link to={data.twitterAccount}>
              <Twitter />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

import React from 'react';

import './footer.css';
import Logo from '../../../assets/images/logo_horizontal.png';
import Facebook from '../../Icons/Logos/Facebook';
import Discord from '../../Icons/Logos/Discord';
import Youtube from '../../Icons/Logos/Youtube';

const Footer = () => (
  <footer className="footer">
    <section className="footer-container">
      <div className="footer-info">
        <figure>
          <img src={Logo} alt="Logo Confeco" />
        </figure>

        <p>
          Unete a la comunidad, disfruta y conoce a esta increible comunidad de
          programadores para programdores.
        </p>
      </div>

      <div className="footer-social">
        <p>Conoce nuestras redes sociales</p>

        <nav className="nav-social">
          <a href="https://www.comfeco.com/icons/facebook.svg" target="_blanck">
            <Facebook />
          </a>

          <a href="https://www.comfeco.com/icons/facebook.svg" target="_blanck">
            <Discord />
          </a>

          <a href="https://www.comfeco.com/icons/facebook.svg" target="_blanck">
            <Youtube />
          </a>
        </nav>
      </div>

      <p className="footer-copy">Copyright ©2020 Developed by Team-React-30</p>
    </section>
  </footer>
);

export default Footer;

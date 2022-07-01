import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay} from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Mahalakshmi Race Course, Goregao,Mumbai</p>
        <p className="p__opensans">01126962981</p>
        <p className="p__opensans">07925507855</p>
      </div>

      <div className="app__footer-links_logo">
        <img className='logo' src={images.rasam} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">09:00 Am - 11:00 Pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">08:00 Am - 12:00 Am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans" style={{color:'grey'}}>2022 Rasam. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;

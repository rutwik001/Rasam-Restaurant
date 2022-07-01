import React from 'react';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
    <p className="p__cormorant">Contact</p>
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Mahalakshmi Race Course, Royal Western India Turf Club, Goregao,Mumbai</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 9:00 Am - 11:00 Pm</p>
        <p className="p__opensans">Sat - Sun: 8:00 Am - 12:00 Am</p>
      </div>
      <h1 className="p__cormorant" style={{ marginTop: '2rem',color:'#998480'}}> India’s finest chain of restaurants.⭐⭐⭐</h1>
    </div>

    <div className="app__wrapper_img">
      <img src={images.contact} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;

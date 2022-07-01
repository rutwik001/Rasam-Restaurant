import React from 'react';
import { MdOpacity } from 'react-icons/md';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
    <p className="p__cormorant">The food dudes</p>
      <h1 className="app__header-h1">Delight in every bite</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>It’s more than food, it’s an experience.You’ll wonder how you ever lived without us.
      Our spices have a story.
</p>
    <h1 className="p__cormorant" style={{color:'#998480'}}>"Fresh ingredients are our secret ingredient."</h1>
    </div>

    <div className="app__wrapper_img">
      <img src={images.home} style={{maxWidth:'90%'}} alt="header_img" />
    </div>
  </div>
);

export default Header;

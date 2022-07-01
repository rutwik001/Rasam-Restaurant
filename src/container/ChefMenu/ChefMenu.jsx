import React from 'react';

import {MenuItem } from '../../components';
import { data, images } from '../../constants';
import './ChefMenu.css';

const ChefMenu = () => (
  <div className="app__chefMenu flex__center section__padding" id="menu">
    <div className="app__chefMenu-title">
     <p className="p__cormorant">The finest flavors explored</p>
     <br />
      <h1 className="headtext__cormorant">Chef&apos;s Special</h1>
    </div>

    <div className="app__chefMenu-menu">
      <div className="app__chefMenu-menu_nonveg  flex__center">
        <p className="app__chefMenu-menu_heading">Non-Veg</p>
        <div className="app__chefMenu_menu_items">
          {data.nonvegs.map((nonveg, index) => (
            <MenuItem key={nonveg.title + index} title={nonveg.title} price={nonveg.price} tags={nonveg.tags} />
          ))}
        </div>
      </div>

      <div className="app__chefMenu-menu_img">
        <img src={images.chefmenu} alt="menu__img" />

        <div className="flex__center">
          <img src={images.sushi} alt="G_overlay" />
        </div>
        
        <img src={images.chefmenu2} alt="menu__img" />
      </div>
      


      <div className="app__chefMenu-menu_vegs  flex__center">
        <p className="app__chefMenu-menu_heading">Veg</p>
        <div className="app__chefMenu_menu_items">
          {data.vegs.map((veg, index) => (
            <MenuItem key={veg.title + index} title={veg.title} price={veg.price} tags={veg.tags} />
          ))}
        </div>
      </div>
    </div>

  </div>
);

export default ChefMenu;

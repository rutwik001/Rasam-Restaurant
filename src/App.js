import React from 'react';

import { AboutUs, FoodItem, FindUs, Footer, Header, ChefMenu } from './container';
import {Navbar} from './components'
import './App.css';


const App = () => (
  <div>
    <Navbar />
    <Header />
    <ChefMenu />
    <FoodItem />
    <AboutUs />
    <FindUs />
    <Footer />
  </div>
);
export default App;

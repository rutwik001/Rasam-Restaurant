import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.About_Background} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content ">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <p className="p__opensans">
          Our spices and flavours are sourced from all over India. The chefs at
          Rasam hail from North East, North West and Central India. Each member
          of the team brings their personal heritage to play in the daily
          mixing, roasting and grinding of spices.Rasam Restaurant serves
          authentic Indian cuisine daily, using a blend of spices particular to
          Rasam.
        </p>
      </div>

      <div className="app__aboutus-content_history flex_center">
        <h1 className="headtext__cormorant">Our History</h1>
        <p className="p__opensans">
          {" "}
          We are immensely proud of our food and our cooking tradition, each
          meal we serve is a compliment to Indian fine dining. We have built a
          reputation as finest Indian restaurant chain. We hope you will visit and experience the
          best restaurant in Mumbai. In 2021 we were awarded 'Best Ethnic
          Restaurant' at the Maharastrian Hospitality Awards.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;

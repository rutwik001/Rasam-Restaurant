import React from "react";

const MenuCard = ({ menuData }) => {

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, price } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <div className="app__menuitem-dash" />
                  </div>
                  <img src={image} alt={name} className="card-media" />
                  <div className="app__menuitem-price">
                    <p className="p__cormorant">{price}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;

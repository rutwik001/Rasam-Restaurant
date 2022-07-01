import React from "react";

const navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar" id="foodlist">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button 
                style={{ marginTop: 15 }}
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;

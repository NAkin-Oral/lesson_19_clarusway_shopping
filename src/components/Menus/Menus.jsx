import React from 'react';
import Menu from '../menu/Menu';

const Menus = ({ menuItems }) => {
  return (
    <div>
      {menuItems.map((item, index) => {
        return (
          <div key={index} className="main-container">
            <Menu item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Menus;

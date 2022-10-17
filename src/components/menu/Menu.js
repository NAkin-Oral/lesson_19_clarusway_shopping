import React from 'react';
import './Menu.css';

const Menu = ({ menuItems }) => {
  return (
    <div className="main-container">
      {menuItems.map(item => {
        const { id, title, price, images, description } = item;
        return (
          <div className="menu-container" key={id}>
            <img src={images[0]} alt={title} />
            <div className="info">
              <header>
                <h4>{title}</h4>
                <h3>${price}</h3>
              </header>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;

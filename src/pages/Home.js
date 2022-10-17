import React from 'react';
import { useState } from 'react';
import Categories from '../components/categories/Categories';
import Header from '../components/header/Header';
import Menus from '../components/menus/Menus';
import data from '../helper/data';

const allCategories = ['all', ...new Set(data.map(item => item.category.name))];

const Home = () => {
  const [menuItems, setMenuItems] = useState(data);
  const handleClick = categoryItem => {
    if (categoryItem === 'all') {
      setMenuItems(data);
    } else {
      const filtered = data.filter(item => {
        return item.category.name === categoryItem;
      });
      setMenuItems(filtered);
    }
  };
  return (
    <div>
      <Header />
      <Categories allCategories={allCategories} handleClick={handleClick} />
      <Menus menuItems={menuItems} />
    </div>
  );
};

export default Home;

import { useState } from 'react';
import Categories from '../components/categories/Categories';
import Header from '../components/header/Header';
import Menus from '../components/Menus/Menus';
import SearchBox from '../components/searchbox/SearchBox';
import data from '../helper/data';

const Home = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categorySearch, setCategorySearch] = useState('all');
  const onSearchChange = e => {
    if (categorySearch === 'all') {
      const filtred = data.filter(item => {
        return (
          item.title.toLocaleLowerCase().includes(e.target.value) ||
          item.price.toString().includes(e.target.value)
        );
      });
      setMenuItems(filtred);
    } else {
      const filtred = data.filter(item => {
        return (
          (item.title.toLocaleLowerCase().includes(e.target.value) ||
            item.price.toString().includes(e.target.value)) &&
          item.category.name === categorySearch
        );
      });
      setMenuItems(filtred);
    }
  };
  // const allCategories = data.reduce(
  //   (acc, value) => {
  //     if (!acc.includes(value.category.name)) {
  //       acc.push(value.category.name);
  //     }
  //     return acc;
  //   },
  //   ['all']
  // );

  const allCategories = data.reduce(
    (acc, value) =>
      !acc.includes(value.category.name) ? [...acc, value.category.name] : acc,
    ['all']
  );

  const handleClick = categoryName => {
    if (categoryName === 'all') {
      setMenuItems(data);
      setCategorySearch('all');
    } else {
      const filtred = data.filter(item => {
        return item.category.name === categoryName;
      });
      setMenuItems(filtred);
      setCategorySearch(categoryName);
    }
  };

  return (
    <div>
      <Header />
      <Categories {...{ allCategories, handleClick }} />
      <SearchBox onChangeHandler={onSearchChange} />
      <Menus menuItems={menuItems} />
    </div>
  );
};

export default Home;

import { useState } from 'react';
import Categories from '../components/categories/Categories';
import Header from '../components/header/Header';
import Menus from '../components/menus/Menus';
import Range from '../components/range/Range';
import SearchBox from '../components/searchbox/SearchBox';
import data from '../helper/data';

const Home = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categorySearch, setCategorySearch] = useState('all');
  const maxPriceTag = data.reduce((acc, item) => {
    if (item.price > acc) acc = item.price;
    return acc;
  }, 0);
  const [maxPrice, setMaxPrice] = useState(maxPriceTag);
  const [minPrice, setMinPrice] = useState(0);

  const onSearchChange = e => {
    if (categorySearch === 'all') {
      const filtred = data.filter(item => {
        return item.title.toLocaleLowerCase().includes(e.target.value);
      });
      setMenuItems(filtred);
    } else {
      const filtred = data.filter(item => {
        return (
          item.title.toLocaleLowerCase().includes(e.target.value) &&
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
  const priceFilter = () => {
    if (categorySearch === 'all') {
      const filtred = data.filter(item => {
        return item.price < maxPrice && item.price > minPrice;
      });
      setMenuItems(filtred);
    } else {
      const filtred = data.filter(item => {
        return (
          item.price < maxPrice &&
          item.price > minPrice &&
          item.category.name === categorySearch
        );
      });
      setMenuItems(filtred);
    }
  };
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
      <Range
        maxPriceTag={maxPriceTag}
        setMaxPrice={setMaxPrice}
        setMinPrice={setMinPrice}
        priceFilter={priceFilter}
        maxPrice={maxPrice}
        minPrice={minPrice}
      />
      <Menus menuItems={menuItems} />
    </div>
  );
};

export default Home;

import { useState } from 'react';
import './range.css';

const Range = ({
  maxPriceTag,
  setMaxPrice,
  setMinPrice,
  priceFilter,
  maxPrice,
  minPrice,
}) => {
  const [value, setValue] = useState(maxPriceTag);
  return (
    <div className="range">
      <label>Choose a max price:${maxPrice}</label>
      <input
        onChange={e => {
          setValue(e.target.value);
          setMaxPrice(e.target.value);
          priceFilter();
        }}
        type="range"
        min="0"
        max={maxPriceTag}
        step="1"
        value={value}
      />
      <label>Choose a min price:${minPrice}</label>
      <input
        type="range"
        min="0"
        max={maxPriceTag}
        step="1"
        onChange={e => {
          setMinPrice(e.target.value);
          priceFilter();
        }}
      />
    </div>
  );
};

export default Range;

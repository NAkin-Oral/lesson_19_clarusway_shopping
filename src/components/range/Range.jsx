import { useState } from 'react';
import './range.css';

const Range = ({
  maxPriceTag,
  setMaxPrice,
  setMinPrice,
  priceFilter,
  maxPrice,
  minPrice,
  valueMax,
  setValueMax,
  valueMin,
  setValueMin,
}) => {
  return (
    <div className="range">
      <label>Choose a max price:${maxPrice}</label>
      <input
        onChange={e => {
          setValueMax(e.target.value);
          setMaxPrice(e.target.value);
          priceFilter();
        }}
        type="range"
        min="0"
        max={maxPriceTag}
        step="1"
        value={valueMax}
      />
      <label>Choose a min price:${minPrice}</label>
      <input
        type="range"
        min="0"
        max={maxPriceTag}
        step="1"
        value={valueMin}
        onChange={e => {
          setValueMin(e.target.value);
          setMinPrice(e.target.value);
          priceFilter();
        }}
      />
    </div>
  );
};

export default Range;

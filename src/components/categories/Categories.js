import React from 'react';
import './Categories.css';

const Categories = ({ allCategories, handleClick }) => {
  return (
    <div className="btn-container">
      {allCategories.map((categoryItem, index) => {
        return (
          <button
            type="button"
            className="category-button"
            key={index}
            onClick={() => handleClick(categoryItem)}
          >
            {categoryItem}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

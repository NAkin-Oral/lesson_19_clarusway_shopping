import './Categories.css';

const Categories = ({ allCategories, handleClick }) => {
  return (
    <div className="btn-container">
      {allCategories.map((item, index) => {
        return (
          <button
            type="button"
            className="category-button"
            key={index}
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

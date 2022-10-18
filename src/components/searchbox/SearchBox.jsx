import './searchbox.css';

const SearchBox = ({ onChangeHandler }) => (
  <div className={`search-box`}>
    <input
      type="search"
      placeholder={'Search Item'}
      onChange={onChangeHandler}
    />
  </div>
);

export default SearchBox;

import './Menu.css';

const Menu = ({ item }) => {
  const { title, price, images, description } = item;
  return (
    <div className="menu-container">
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
};

export default Menu;

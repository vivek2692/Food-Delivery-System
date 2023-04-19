import React, {useState} from "react";
import "./Dish_Card.css";

const Dish_Card = ({ data, AddItemToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    AddItemToCart(data, quantity);
  };

  return (
    // <div className='dishes_container'>
    <div key={data._id} className="dish_card_container">
      <div className="dish_card_top">
        <img src={data.img} alt="" />
      </div>
      <div className="dish_card_bottom">
        <p className="dish_title">{data.name}</p>
        <h4>{data.category}</h4>
        <p className="dish_price">{data.price || 100}$</p>
        <button className="btn-secondary" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
    // </div>
  );
};

export default Dish_Card;

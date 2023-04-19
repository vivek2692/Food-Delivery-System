import React, { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({data, removeItem, handleIncrement, handleDecrement}) => {

    const [quantity, setQuantity] = useState(data.quantity);

    const handleInc = () => {
      setQuantity(prev => prev + 1)
      handleIncrement(data, data.quantity+1)
    };
    const handleDec = () => {
      if(quantity > 1){
        setQuantity(prev => prev - 1)
        handleDecrement(data, data.quantity-1)
      }
    };
    const rmItem = () => {
      removeItem(data)
    }

  return (
    <div className="item">
      <div className="item-img">
        <img
          src={data.img}
          alt=""
        />
      </div>
      <div className="item-info">
        <h4 className="item-title">
          <span className="item-details">Name : </span>{data.name}
        </h4>
        <h4 className="item-price">
          <span className="item-details">Price : </span>{data.price || 100}$
        </h4>
      </div>
      <div className="item-quantity">
        <button className="cart-btn" onClick={handleDec}>
          -
        </button>
        <input
          type="number"
          min={1}
          value={data.quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button className="cart-btn" onClick={handleInc}>
          +
        </button>
      </div>
      <div className="remove-item">
        <button className="cart-btn2" onClick={rmItem}><DeleteIcon/></button>
      </div>
    </div>
  );
};

export default CartItem;

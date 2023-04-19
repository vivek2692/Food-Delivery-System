import React, { useState, useEffect } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { orderData } from "../data/orderData";
import axios from 'axios';

const Cart = () => {
  // const [newData, setNewData] = useState(orderData);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setNewData(storedCartItems);
  }, []);

  const handleIncrement = (item, quantity) => {
    const updatedCartItems = newData.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: quantity } : cartItem
    );
    setNewData(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(newData));
  };

  const handleDecrement = (item, quantity) => {
    const updatedCartItems = newData.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: quantity } : cartItem
    );
    setNewData(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(newData));
  };

  const removeItem = (item) => {
    const tempdata = newData.filter((data) => {
      return data.id !== item.id;
    });
    console.log("tempData", tempdata);
    setNewData(tempdata);
    localStorage.setItem("cart", JSON.stringify(tempdata));
  };


  let length = newData.length;
  let amount = 0;

  newData.map((data) => (amount += data.price * data.quantity));

  let gst = Math.floor(amount * 0.18);
  let total = amount + gst;

  const handleSubmit = async() => {
    const user = JSON.parse(localStorage.getItem("user"))
    const item = []
    newData.map((data) => {
      const temp = {item_name: data.name, item_quantity: data.quantity};
      item.push(temp);
    })
    const obj = {
      name: user.name,
      email: user.email,
      address: user.address,
      total_amount: total,
      items: item
    };
    await axios.post("http://localhost:5000/api/order/create",obj)
    .then((res) => {
      const info = res.data;
      // console.log(info.data);
      alert("Order Placed")
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="cart-container">
      <div className="cart-left">
        <h2>Your Meal</h2>
        <div className="order">
          {newData.length > 0 ? (
            newData.map((item) => (
              <CartItem
                data={item}
                removeItem={removeItem}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
            ))
          ) : (
            <center>
              <h3>No items added</h3>
            </center>
          )}
        </div>
      </div>
      <div className="cart-right">
        <h2>Order Summary</h2>
        <div className="bill">
          <div className="bill-top">
            <div className="bill-header">
              <p className="dish-name">Name</p>
              <p className="dish-quantity">Quantity</p>
              <p className="dish-price">Price</p>
            </div>

            {newData.map((item) => {
              return (
                <div className="bill-rows">
                  <p className="dish-name">{item.name}</p>
                  <p className="dish-quantity">{item.quantity}</p>
                  <p className="dish-price">{item.price || 100}$</p>
                </div>
              );
            })}
          </div>
          <div className="bill-bottom">
            <div className="final-bill">
              <p>
                <span className="span1">Total Items</span> :{" "}
                <span className="span2"> {length}</span>
              </p>
              <p>
                <span className="span1">Amount</span> :{" "}
                <span className="span2"> {amount}$</span>
              </p>
              <p>
                <span className="span1">GST</span> :{" "}
                <span className="span2"> {gst}$</span>
              </p>
              <p>
                <span className="span1">Total Amount</span> :{" "}
                <span className="span2"> {total}$</span>
              </p>
              <button className="btn-secondary pay-btn" onClick={handleSubmit}>Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

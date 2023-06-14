import React, { useState, useEffect } from "react";
import "./MenuDishes.css";
import Dish_Card from "./Dish_Card";
import axios from "axios";

const MenuDishes = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cartItems));
  // }, [cartItems]);

  const AddItemToCart = (item, quantity) => {
    console.log("item", item);
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem._id === item._id
    );

    if (existingCartItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem._id === item._id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      );
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity }]);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
    console.log("cart", cartItems);
    // alert("Item Added to Cart")
  };


  useEffect(() => {
    const getData = async () => {
      setStatus("start");
      await axios
        .get(`https://react-backend-yzr8.onrender.com/api/food/get-all-food?name=${search}`)
        .then((res) => {
          const info = res.data.data;
          setData(info);
          setDishes(info);
        })
        .catch((err) => {
          alert(err.response.data.msg);
        });
      setStatus("end");
    };

    getData();
  }, [search]);

  const [dishes, setDishes] = useState(data);

  let cats = new Set();
  data.map((dish) => {
    return cats.add(dish.category.toString());
  });

  const categories = Array.from(cats);

  useEffect(() => {
    if (category === "") {
      setDishes(data);
    } else {
      let newDishes = data.filter((dish) => {
        return dish.category === category;
      });
      setDishes(newDishes);
    }
  }, [category]);

  return (
    <div className="popular_dishes_container">
      <h1 className="center">Menu</h1>
      <div className="filters">
        <div>
          <h3>Select Category :</h3>
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="">ALL</option>
            {categories.map((cat) => {
              return <option value={cat}>{cat}</option>;
            })}
          </select>
        </div>
        <div>
          <h3>Search:</h3>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter Dish Name"
          />
        </div>
      </div>
      <div className="dishes_container">
        {dishes.length > 0 && (
          dishes.map((dish) => <Dish_Card data={dish} AddItemToCart={AddItemToCart} />)
        )}
        {dishes.length === 0 &&  status === "end" && (
          <h2>No Items Found!</h2>
        )} 
        {dishes.length === 0 &&  status === "start" && (
          <h2>Please Wait...</h2>
        )}
      </div>
    </div>
  );
};

export default MenuDishes;

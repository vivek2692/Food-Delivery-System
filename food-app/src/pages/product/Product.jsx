import {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@mui/icons-material";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import axios from 'axios';


export default function Product() {

  const [food, setFood] = useState({})

  const location = useLocation();

  const id = location.pathname.split("/")[3];

  useEffect(() => {
    const GetUser = async() => {
      await axios.get(`https://react-backend-yzr8.onrender.com/api/food/find/${id}`)
      .then((res) => {
        const data = res.data;
        console.log(data.data);
        setFood(data.data)
    })
    .catch((err) => {
        alert(err.response.data.msg);
    })
    }

    GetUser();
  },[])

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="product">
          <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            {/* <Link to="/admin/newproduct">
              <button className="productAddButton">Create</button>
            </Link> */}
          </div>
          <div className="productTop">
            <div className="productTopLeft">
              <Chart
                data={productData}
                dataKey="Sales"
                title="Sales Performance"
              />
            </div>
            <div className="productTopRight">
              <div className="productInfoTop">
                <img
                  src={food.img}
                  alt=""
                  className="productInfoImg"
                />
                <span className="productName">{food.name}</span>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                  <span className="productInfoKey">id:</span>
                  <span className="productInfoValue">{food.id}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">category:</span>
                  <span className="productInfoValue">{food.category}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">sales:</span>
                  <span className="productInfoValue">5123</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">available:</span>
                  <span className="productInfoValue">{food.availability === true ? "Yes" : "No"}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">quantity:</span>
                  <span className="productInfoValue">{food.quantity}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="productBottom">
            <form className="productForm">
              <div className="productFormLeft">
                <label>Product Name</label>
                <input type="text" placeholder={food.name}/>
                <label>Available</label>
                <select name="inStock" id="idStock">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="productFormRight">
                <div className="productUpload">
                  <img
                    src={food.img}
                    alt=""
                    className="productUploadImg"
                  />
                  <label for="file">
                    <Publish />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="productButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

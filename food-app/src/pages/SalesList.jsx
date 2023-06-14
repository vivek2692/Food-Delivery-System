import { useState, useEffect } from "react";
// import Chart from "../../components/chart/Chart";
// import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "../pages/home/home.css";
import "./SalesList.css";
// import { userData } from "../../dummyData";
// import WidgetSm from "../../components/widgetSm/WidgetSm";
// import WidgetLg from "../../components/widgetLg/WidgetLg";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import axios from "axios";
// import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const GetData = async () => {
      await axios
        .get("http://localhost:5000/api/order/sales")
        .then((res) => {
          const data = res.data;
          console.log(data.data);
          setData(data.data);
        })
        .catch((err) => {
          alert(err.response.data.msg);
        });
    };

    GetData();
  }, []);

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="home">
          <div className="chart" style={{display: "flex", alignItems: "center", justifyContent: "flex-start", flexWrap: "wrap", gap: "2rem"}}>
            {data.map((item) => {
                return <Card sx={{ Width: 345 }} style={{width: "250px", height: "300px"}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Category: {item.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price: {item.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Sales: {item.sales}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            })}
          </div>
        </div>
      </div>
    </>
  );
}

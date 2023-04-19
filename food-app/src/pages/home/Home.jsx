import {useState, useEffect} from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import axios from "axios";

export default function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const GetData = async() => {
      await axios.get("http://localhost:5000/api/users/get-all")
      .then((res) => {
        const data = res.data;
        console.log(data.data);
        setData(data.data);
      })
      .catch((err) => {
        alert(err.response.data.msg);
      })
    }

    GetData();
  },[])

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="home">
          <FeaturedInfo />
          <Chart
            data={userData}
            title="User Analytics"
            grid
            dataKey="Active User"
          />
          <div className="homeWidgets">
            {/* {data.map((user) => { */}
              <WidgetSm data={data} />
            {/* // })} */}
            <WidgetLg />
          </div>
        </div>
      </div>
    </>
  );
}

import "./productList/productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@mui/icons-material";
// import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import axios from 'axios';

export default function ProductList() {
  // const [data, setData] = useState(productRows);

  const [data, setData] = useState([]);

  useEffect(() => {
    const GetData = async () => {
      await axios
        .get(`https://react-backend-yzr8.onrender.com/api/order/payment`)
        .then((res) => {
          const info = res.data;
          console.log(info.data);
          setData(info.data);
        })
        .catch((err) => {
          alert(err.response.data.msg);
        });
    };

    GetData();
  }, []);

  const handleDelete = async(id) => {
    await axios.get(`http://localhost:5000/api/food/delete/${id}`)
    .then((res) => {
      const data = res.data;
      alert(data.msg);
      setData(data.data)
    })
    .catch((err) => {
      // alert(err.response.data.msg);
      alert("Something went wrong")
    })
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "amount", headerName: "Amount", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    // {
    //   field: "price",
    //   headerName: "Price",
    //   width: 160,
    // },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/admin/product/" + params.row._id}> */}
              <button className="productListEdit">Edit</button>
            {/* </Link> */}
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="productList">
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
          />
        </div>
      </div>
    </>
  );
}

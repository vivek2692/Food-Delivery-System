import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@mui/icons-material";
// import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import axios from "axios";

export default function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const GetData = async () => {
      await axios
        .get("https://react-backend-yzr8.onrender.com/api/users/get-all")
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

  const handleDelete = async(id) => {
    await axios.get(`https://react-backend-yzr8.onrender.com/api/users/delete/${id}`)
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
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt=""
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            Active
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
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
        <div className="userList">
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

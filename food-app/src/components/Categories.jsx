import React, {useState, useEffect} from 'react'
import './Categories.css'
import CatCard from './Cat_Card'
import axios from 'axios'

const Categories = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const GetData = async() => {
      await axios.get("https://react-backend-yzr8.onrender.com/api/category/get-all")
      .then((res) => {
        const info = res.data;
        setData(info.data);
    })
    .catch((err) => {
        alert(err.response.data.msg);
    })
    }

    GetData();
  },[])

  return (
    <div className='categories_container'>
        <h3 className='cat_head'>Categories</h3>
        <div className="cat_cards">
          {data.map((cat) => <CatCard data={cat}/>)}
        </div>
    </div>
  )
}

export default Categories
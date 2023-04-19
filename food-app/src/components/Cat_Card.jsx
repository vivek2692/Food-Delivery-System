import React from 'react'
import './Cat_Card.css'

const Cat_Card = ({data}) => {
  return (
    <div key={data._id} className='cat_card_container'>
        <div className="cat_card_top">
            <img src={data.img} alt="" />
        </div>
        <div className="cat_card_bottom">
            <p className="cat_name">{data.name}</p>
        </div>
    </div>
  )
}

export default Cat_Card
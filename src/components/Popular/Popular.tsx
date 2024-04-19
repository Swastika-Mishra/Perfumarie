// import React from 'react'
import './Popular.css'
import data_product from '../../assets/data.js'
import Item from '../Items/Item.js'

const Popular = () => {
    return(
        <div className='popular'>
            <h1>Popular Products</h1>
            <div className="popular-item">
                {data_product.map((item)=>{
                    return (<Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.new_price} />)
                })}
            </div>
        </div>
    )
}

export default Popular;
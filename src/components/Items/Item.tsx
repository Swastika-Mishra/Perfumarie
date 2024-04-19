// import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = (props: any) => {
    return (
        <Link to={`/Buy/${props.id}`}>
            <div className='item'>
                <img src={props.image} alt="" className='item-image'/>
                <p>{props.name}</p>
                <div className="item-prices">
                    <div className="item-price-new">
                        ${props.new_price}
                    </div>
                    <div className="item-price-new">
                        ${props.old_price}
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default Item;
// import React from 'react'
import './Offers.css'
import exclusive_image from '../../assets/perfume-bottle-pink-product-backdrop.jpg'

const Offers = () => {
    return (
        <>
            <div className='offers'>
                <div className="offers-right">
                    <img src={exclusive_image} alt="" />
                </div>
                <h1 className='offer'>Exclusive Offers for you</h1>
                <button className='check'>Check Now</button>
            </div>
        </>

    )
}
export default Offers
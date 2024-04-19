// import { useContext, useState } from "react";
// import { ShopContext } from "../../Context/ShopContext";
import Item from '../Items/Item'
import './Generate.css'
import all_product from "../../assets/all_products";

const Generate = () => {
    return(
            <div className="card-container">
                {all_product.map((item)=>{
                    return (<Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.new_price} rating={item.rating}/>)
                })}
            </div>
        
    )
}

export default Generate;

// <div className="genearte">
{/* <div className="indexsort">
                <p>
                    <span>Showing 1-</span>
                </p>
            </div> */}
{/* <div className="categorysort">
                Sort by <img src=""/>
            </div> */}
{/* <div className="products">
                {all_products.map((item: any)=>{
                    if(props.category == item.category){
                        return <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.new_price}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
        </div> */}
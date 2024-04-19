import { createContext, useContext, useState } from "react";
import all_products from '../assets/all_products'

export const ShopContext = createContext(null as any);

// const getDefaultCart = () =>{
//     let cart = {};
//     for (let index =0; index < all_products.length; index++){
//         cart[index] = 0;
//     }
//     return cart;
// }

export const Provider = (props: any) => {
    // const [cartItems, setcartItems] = useState(getDefaultCart());
    const ContextValue = {all_products};

    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

// const Provider = (props: any) =>{
//     const ContextValue = {all_products};
//     return(
//         <ShopContext.Provider value={ContextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     )
// }

export default ShopContext;
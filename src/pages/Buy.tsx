import Product from "../components/Product/Product"
import { useParams } from 'react-router-dom'
import all_products from '../assets/all_products'
import Navbar from '../components/Navbar'
import background from '../assets/77.jpg'
import './Buy.css'

export default function Buy() {
    const { productId } = useParams<{ productId: string }>();
    const product = all_products.find((e: any) => e.id === Number(productId))
    return (
        <>
            <Navbar />
            <img src={background} alt="" className="background" />
            <div className="product">
                {product && <Product product={product} />}
                {/* <Product product={product}/> */}
            </div>
        </>
    );
}
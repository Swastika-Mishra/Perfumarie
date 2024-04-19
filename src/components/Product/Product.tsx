import Capacity from './Capacity'
import './Product.css'

export default function Product(props: any) {
    const { product } = props;
    return (
        <div className="main2">
            <div className="product">
                <div className='product_image'>
                    <img src={product.image} alt=""/>
                </div>
                <div className="description">
                    <h1>{product.name}</h1>
                    <div className="price">
                        <p>${product.new_price}</p>
                        <p className='old-cut'>${product.old_price}</p>
                    </div>
                    <div className='spanish'>Rating : <strong><p>{product.rating}</p></strong>(122,372 reviews)</div>
                    <h4>Size: </h4>
                    <Capacity />
                    <label>Quantity: </label>
                    <select name="quantity" id="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                    <div className="control">
                        <button className='add-to-cart'>Add to Cart</button>
                        <button className='buy-now'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
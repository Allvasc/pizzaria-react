import React from "react";
import "./Products.css"
import { AiFillStar } from "react-icons/ai";
import { AuthContext } from '../../provider/auth'


const Products = () => {

  const { data, cart, setCart } = React.useContext(AuthContext)

  const { productItems } = data;

  const addToCart = (productItem) => {
    let newCart = [...cart]
    let itemInCart = newCart.find(item => productItem.flavor === item.flavor)

    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...productItem,
        quantity: 1,
      }
      newCart.push(itemInCart)
    }
    setCart(newCart);
  }

  return (
    <>
      <div className='products'>
        {productItems.map((productItem) => (
          <div key={productItem.id} className='card'>
            <div>
              <img className='imgPizza' src={productItem.image} alt={productItem.flavor} />
            </div>
            <div className='itemDescription'>
              <p><AiFillStar className="star" /> 4.8</p>
              <h2>{productItem.flavor}</h2>
              <p>{productItem.description}</p>
              <div className="itemPreco">
                <h3>R$ {productItem.price}</h3>
                <button onClick={() => addToCart(productItem)} >+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Products
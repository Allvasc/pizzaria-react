import "./Products.css"
import Data from "../../back/Data/Data"

const Products = ({ setCart, cart }) => {

  const { productItems } = Data;

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
          <div key={productItem.id} className='card' >
            <div>
              <img className='imgPizza' src={productItem.image} alt={productItem.flavor} />
            </div>
            <div className='itemDescription'>
              <h2>{productItem.flavor}</h2>
              <p>{productItem.description}</p>
              <p>R$ {productItem.price}</p>
              <button onClick={() => addToCart(productItem)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Products
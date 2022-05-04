import "./Products.css"
import Data from "../../back/Data/Data"

const Products = ({ addToCart }) => {

  const { productItems } = Data;


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
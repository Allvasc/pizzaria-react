import React from 'react'

const Cart = ({ cart, clearCart, removeFromCart, setQuantity }) => {

    const getTotalSum = () => {
        return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0)
    }

    return (
        <>
            <div>
                <h1>Cart</h1>
                {cart.length > 0 && (
                    <button onClick={clearCart}>Clear Cart</button>
                )}
            </div>

            <div className='products'>
                {cart.map((productItem, idx) => (
                    <div key={idx} className='card'>
                        <div>
                            <img className='imgPizza' src={productItem.image} alt={productItem.flavor} />
                        </div>
                        <div className='itemDescription'>
                            <h2>{productItem.flavor}</h2>
                            <p>{productItem.description}</p>
                            <p>R$ {productItem.price}</p>
                            <p>{productItem.quantity}</p>
                            <input value={productItem.quantity} onChange={(e) => setQuantity(productItem, parseInt(e.target.value))} />
                        </div>
                        <button onClick={() => removeFromCart(productItem)}></button>
                    </div>
                ))}
                <div>
                    Total: R${getTotalSum()}
                </div>
            </div>
        </>
    )
}

export default Cart
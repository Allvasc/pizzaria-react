import React from 'react'
import './Cart.css'
import { CartContext } from '../../provider/auth'

const Cart = () => {

    const { cart, getTotalSum, clearCart, setQuantity, removeFromCart } = React.useContext(CartContext)



    return (
        <>
            <div className='header-cart'>
                <h1>Carrinho</h1>
                <h2>Total: R${getTotalSum()}</h2>
            </div>
            {cart.length > 0 && (<div className='case-buttons'>
                <button className='limpar-carrinho' onClick={clearCart}>Limpar carrinho</button>
                <button className='finalizar-compra'>Finalizar pedido</button>
            </div>

            )}

            <div className='produtos-carrinho'>
                {cart.map((productItem, idx) => (
                    <div key={idx} className='card-carrinho'>
                        <div className='item-carrinho'>
                            <h2>Pizza<br /> {productItem.flavor}</h2>
                            <p>Unidade<br /> R$ {productItem.price}</p>
                            <p>subtotal<br /> R${productItem.quantity * productItem.price}</p>
                            <div>
                                <p className='quantidade'>quantidade</p>
                                <input type="number" value={productItem.quantity} onChange={(e) => setQuantity(productItem, parseInt(e.target.value))} />
                            </div>
                            <button className='remmove-item' onClick={() => removeFromCart(productItem)}>X</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cart
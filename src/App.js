import React, { useEffect, useState } from 'react'
import './App.css';
import "./components/front/Header/Header.css"
import Products from './components/front/Products/Products'
import Cart from './components/front/Cart/Cart';
import Header from './components/front/Header/Header';

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

function App() {

  const PAGE_PRODUCTS = 'products'
  const PAGE_CART = 'cart'

  const [cart, setCart] = useState(cartFromLocalStorage)
  const [page, setPage] = useState('products')
 

  useEffect(() =>{
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((productItem) => productItem !== productToRemove)
    )
  }

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

  const navigateTo = (nextPage) => {
    setPage(nextPage)
  }

  const clearCart = () => {
    setCart([])
  }

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity, 0
    )
  }

  const setQuantity = (productItem, amount) => {
    const newCart = [...cart]
    newCart.find(item => item.flavor === productItem.flavor).quantity = amount;
    setCart(newCart)
  }


  return (
    <div className="App">

      {/*Header*/}
      <Header PAGE_PRODUCTS={PAGE_PRODUCTS} PAGE_CART={PAGE_CART} cart={cart} navigateTo={navigateTo} getCartTotal={getCartTotal} />

      {/*Produtos*/}
      {page === PAGE_PRODUCTS && <Products addToCart={addToCart} />}
      {page === PAGE_CART && <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} setQuantity={setQuantity} />}
    </div>
  );
}

export default App;

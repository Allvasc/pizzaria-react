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


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const navigateTo = (nextPage) => {
    setPage(nextPage)
  }

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity, 0
    )
  }

  return (
    <div className="App">

      {/*Header*/}
      <Header PAGE_PRODUCTS={PAGE_PRODUCTS} PAGE_CART={PAGE_CART} cart={cart} navigateTo={navigateTo} getCartTotal={getCartTotal} />

      {/*Produtos*/}
      {page === PAGE_PRODUCTS && <Products cart={cart} setCart={setCart} />}
      {page === PAGE_CART && <Cart cart={cart} setCart={setCart}/>}
    </div>
  );
}

export default App;

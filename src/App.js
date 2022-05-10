import React from 'react'
import './App.css';
import "./components/Header/Header.css"
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import { CartContext } from './provider/auth'


function App() {

  const { page, PAGE_PRODUCTS, PAGE_CART } = React.useContext(CartContext)

  return (
    <div className="App">

      {/*Header*/}
      <Header />

      {/*Menu*/}
      <Menu />

      {/*Produtos*/}
      {page === PAGE_PRODUCTS && <Products />}
      {page === PAGE_CART && <Cart />}
    </div>
  );
}

export default App;

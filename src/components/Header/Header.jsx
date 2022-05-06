import React from 'react'
import "./Header.css"
import logo from "../../logo.png"


const Header = ({navigateTo, PAGE_PRODUCTS, PAGE_CART, getCartTotal, }) => {


    return (
        <header className='header'>
            <div>
                <h1>
                    <div className='logo' onClick={() => navigateTo(PAGE_PRODUCTS)}>
                        <img className='logomarca' src={logo} alt="logomarca pizzaria" />
                    </div>
                </h1>
            </div>
            <div className='cart' onClick={() => navigateTo(PAGE_CART)}>
                <p>Pontos:{getCartTotal()}</p>
            </div>
        </header>
    )
}

export default Header
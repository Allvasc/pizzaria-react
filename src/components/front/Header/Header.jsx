import React from 'react'
import "./Header.css"


const Header = ({navigateTo, PAGE_PRODUCTS, PAGE_CART, getCartTotal, }) => {


    return (
        <header className='header'>
            <div>
                <h1>
                    <div className='logo' onClick={() => navigateTo(PAGE_PRODUCTS)}>
                        <img className='logomarca' src="../assets/logo.webp" alt="logomarca pizzaria" />
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
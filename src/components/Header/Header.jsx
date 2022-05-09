import React from 'react'
import "./Header.css"
import logo from "../../logo.png"
import { AuthContext } from '../../provider/auth'


const Header = () => {

    const { navigateTo, PAGE_PRODUCTS, PAGE_CART, getCartTotal } = React.useContext(AuthContext)

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
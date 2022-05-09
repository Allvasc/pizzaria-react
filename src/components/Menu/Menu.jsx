import React from 'react'
import './Menu.css'
import { BsArrowRight } from "react-icons/bs";
import { AuthContext } from '../../provider/auth'


function Menu() {

    const { navigateTo, PAGE_PRODUCTS } = React.useContext(AuthContext)

    return (
        <div className='menu-case'>
            <div>
                <ul>
                    <li onClick={() => navigateTo(PAGE_PRODUCTS)}>Recheio</li>
                    <li>Massa</li>
                    <li>Tamanho</li>
                    <li>Ingredientes</li>
                </ul>
                <div className='link-massa'>
                    <h2>Recheios</h2>
                    <a href="http://">ESCOLHA A MASSA <BsArrowRight /></a>
                </div>
            </div>
        </div>
    )
}

export default Menu
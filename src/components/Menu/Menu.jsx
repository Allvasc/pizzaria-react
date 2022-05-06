import './Menu.css'
import { BsArrowRight } from "react-icons/bs";


import React from 'react'

function Menu({navigateTo, PAGE_PRODUCTS}) {
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
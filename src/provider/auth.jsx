import React, { useState, useEffect } from 'react'
import bauru from "../assets/bauru.png"
import calabresa from "../assets/calabresa.png"
import mussarela from "../assets/mussarela.png"
import marguerita from "../assets/marguerita.png"
import camarao from "../assets/camarao.png"
import portuguesa from "../assets/portuguesa.png"

export const CartContext = React.createContext({})

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

export const CartProvider = (props) => {

    const data = {
        productItems: [
            {
                id: "1",
                category: "pizza completa",
                flavor: "Bauru",
                description: "Mussarela, presunto, requeijão, tomate, oregano...",
                price: 20.00,
                image: bauru,
                sale: true
            },
            {
                id: "2",
                category: "pizza completa",
                flavor: "Calabresa",
                description: "Mussarela, Calabresa, molho de tomate, oregano...",
                price: 20.00,
                image: calabresa,
                sale: false
            },
            {
                id: "3",
                category: "pizza completa",
                flavor: "Mussarela",
                description: "Mussarela, azeitona, molho de tomate, oregano...",
                price: 20.00,
                image: mussarela,
                sale: false
            },
            {
                id: "4",
                category: "pizza completa",
                flavor: "Marguerita",
                description: "Mussarela, tomate, manjericão, oregano, molho...",
                price: 20.00,
                image: marguerita,
                sale: false
            },
            {
                id: "5",
                category: "pizza completa",
                flavor: "Camarão",
                description: "Mussarela, camarão, catupiri, requeijão, oregano...",
                price: 20.00,
                image: camarao,
                sale: false
            },
            {
                id: "6",
                category: "pizza completa",
                flavor: "Portuguesa",
                description: "Mussarela, pimentão, azeitona, oregano...",
                price: 20.00,
                image: portuguesa,
                sale: false
            },
        ]
    }

    const [cart, setCart] = useState(cartFromLocalStorage)
    const [page, setPage] = useState('products')

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const PAGE_PRODUCTS = 'products'
    const PAGE_CART = 'cart'

    const navigateTo = (nextPage) => {
        setPage(nextPage)
    }

    const getCartTotal = () => {
        return cart.reduce(
            (sum, { quantity }) => sum + quantity, 0
        )
    }
    const getTotalSum = () => {
        return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0)
    }

    const setQuantity = (productItem, amount) => {
        const newCart = [...cart]
        newCart.find(item => item.flavor === productItem.flavor).quantity = amount;
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter((productItem) => productItem !== productToRemove)
        )
    }

    return (
        <CartContext.Provider value={{ data, cart, page, setCart, setPage, navigateTo, getCartTotal, PAGE_PRODUCTS, PAGE_CART, getTotalSum, setQuantity, clearCart, removeFromCart }}>
            {props.children}
        </CartContext.Provider>
    )
}
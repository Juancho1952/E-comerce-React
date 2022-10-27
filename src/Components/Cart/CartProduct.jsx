import axios from 'axios'
import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './styles/cartProduct.css'

const CartProduct = ({ product }) => {

    const dispatch =useDispatch()

    const handleDelete = () => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
        axios.delete(URL, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductsCart())
            })
            .catch(err => console.log(err))
    }

    return (
        <article className='cart-p'>
            <h2 className='cart-title'>{product.title}</h2>
            <ul className='cart-items'>
                <li className='cart-price'><span>Price : </span>{product.price}</li>
                <li className='cart-quantity'><span>Quantity</span>{product.productsInCart.quantity}</li>
            </ul>
            <button onClick={handleDelete} className='cart-p__icon'>
                <AiTwotoneDelete />
            </button>
        </article>
    )
}

export default CartProduct
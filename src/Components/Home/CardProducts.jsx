import axios from 'axios'
import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './styles/cardProducts.css'

const CardProducts = ({product}) => {

    const navigate =useNavigate()
    const dispatch = useDispatch()

    const handleNavigation = () => {
        navigate(`/product/${product.id}`)
    }

    const handleAddCart = e => {
        e.stopPropagation()
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        const data = {
            id: product.id,
            quantity: 1
        }
        axios.post(URL, data, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductsCart())
            })
            .catch(err => console.log(err))
    }

    

    return (
        <article onClick={handleNavigation} className='product'>
            <header className='product__header'>
                <img className='product__img' src={product.productImgs[0]} alt="" />
            </header>
            <div className='product__body'>
                <h3 className='product__title'>{product.title}</h3>
                <div className='product__price'>
                    <span className='product__price-label'>Price</span>
                    <p className='product__price-number'>{product.price}</p>
                </div>
                <button onClick={handleAddCart} className='product__icon-container'>
                    <FaShoppingCart className='product__icon'/>
                </button>
            </div>
        </article>
    )
}

export default CardProducts
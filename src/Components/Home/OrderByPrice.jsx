import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingProducts, descendingProducts } from '../../store/slices/products.slice'

const OrderByPrice = () => {

    const dispatch = useDispatch()

    const handleAscendant = () => {
        dispatch(ascendingProducts())
    }

    const handleDescendant = () => {
        dispatch(descendingProducts())
    }
    return (
        <div className='order-container'>
            <h3>Order</h3>
            <div className='order-container-btns'>
            <button className='order-container__btn-ascen' onClick={handleAscendant}> ⏫ Ascendant</button>
            <button className='order-container__btn-descen' onClick={handleDescendant}> Descendant ⏬</button>
            </div>
        </div>
    )
}

export default OrderByPrice
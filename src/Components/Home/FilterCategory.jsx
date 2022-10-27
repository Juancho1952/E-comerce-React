import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, getProductsByCategory } from '../../store/slices/products.slice'

const FilterCategory = () => {

    const [categories, setCategories] = useState()

    const dispatch = useDispatch()

    useEffect(() => {
        const URL ='https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
        axios.get(URL)
            .then(res => setCategories(res.data.data.categories))
            .catch(err => console.log(err))
    }, [])
    
    const handleFetchCategory = id =>{
        if (id) {
            dispatch(getProductsByCategory(id))
        }else {
            dispatch(getAllProducts())
        }
    }

    return (
        <article>
            <h3>Category</h3>
            <ul className='filter-category__ul'>
                <li onClick={() => handleFetchCategory()}>All Products</li>
                {
                    categories?.map(category => (
                        <li
                        key={category.id}
                        onClick={() => handleFetchCategory(category.id)}
                        >
                            {category.name}
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}

export default FilterCategory
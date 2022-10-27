import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../Components/productID/ProductInfo'
import SimilarProducts from '../Components/productID/SimilarProducts'
import SliderImgs from '../Components/productID/SliderImgs'

const ProductId = () => {

    const [product, setProduct] = useState()
    
    const { id } = useParams()
    
    useEffect(() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
        axios.get(URL)
        .then(res => setProduct(res.data.data.product))
        .catch(err => console.log(err))
    }, [id])


    return (
        <div>
            {
                product && <SliderImgs product={product}/>
            }
            <ProductInfo
                product={product}
            />
            <SimilarProducts  product={product}/>
        </div>
    )
}

export default ProductId
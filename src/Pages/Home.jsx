import React from 'react'
import './styles/Home.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProducts from '../Components/Home/CardProducts'
import { getAllProducts, setProductsGlobal } from '../store/slices/products.slice'
import InputSearch from '../Components/Home/InputSearch'
import { useState } from 'react'
import FilterCategory from '../Components/Home/FilterCategory'
import FilterPrice from '../Components/Home/FilterPrice'
import OrderByPrice from '../Components/Home/OrderByPrice'

const Home = () => {

    const [inputtext, setInputtext] = useState('')
    const [filterByText, setFilterByText] = useState()
    const [filterByPrice, setFilterByPrice] = useState({
        from: 0,
        to: Infinity
    })

    const products = useSelector(state => state.products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    useEffect(() => {
        if (inputtext !== '' && products) {
            const cb = product => product.title.toLowerCase().includes
                (inputtext.toLowerCase().trim())
            setFilterByText(products.filter(cb))
        } else {
            setFilterByText(products)
        }
    }, [inputtext, products])

    const callBackFilterPrice = product => {
        return +product.price > filterByPrice.from && +product.price <= filterByPrice.to
    }

    return (
        <main className='home'>
            <InputSearch
                className='home-input'
                setInputtext={setInputtext}
                inputtext={inputtext}
            />
            <section className='home__filter'>
                <FilterPrice setFilterByPrice={setFilterByPrice} />
                <FilterCategory />
                <OrderByPrice />
            </section>
            <div className='home__container'>
                {
                    filterByText?.filter(callBackFilterPrice).map(product => (
                        <CardProducts
                            product={product}
                            key={product.id}
                        />
                    ))
                }
            </div>
        </main>
    )
}

export default Home
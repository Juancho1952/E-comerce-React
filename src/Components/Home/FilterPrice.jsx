import React from 'react'
import './styles/filterPrice.css'

const FilterPrice = ({setFilterByPrice}) => {

    const handleSubmit = e => {
        e.preventDefault()
        const from = +e.target.from.value
        const to = +e.target.to.value

        const obj ={
            from: from, 
            to: to !== 0 ? to : Infinity
        }
        setFilterByPrice(obj)
    }

    return (
        <form className='filter-price-form' onSubmit={handleSubmit}>
            <h3 className='filter-price-form__title'>Price</h3>
            <div>
                <label htmlFor="from">From</label>
                <input type="number" id='from' />
            </div>
            <div>
                <label htmlFor="to">To</label>
                <input type="number" id='to' />
            </div>
            <button>Filter</button>
        </form>
    )
}

export default FilterPrice
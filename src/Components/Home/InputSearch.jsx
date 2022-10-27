import React from 'react'
import './styles/inputSearch.css'


const InputSearch = ({ setInputtext, inputtext }) => {

    const handleChange = e => {
        setInputtext(e.target.value)
    }

    return (
        <input className='Input-search' value={inputtext} onChange={handleChange} type='text' placeholder='Search your product here'>

        </input>
    )
}

export default InputSearch
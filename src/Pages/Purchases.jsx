import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import CardPurchase from '../Components/Purchases/CardPurchase'
import getConfig from '../utils/getConfig'

const Purchases = () => {

    const [purchases, setPurchases] = useState()

    useEffect(() => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        axios.get(URL, getConfig())
            .then(res => setPurchases(res.data.data.purchases))
            .catch(err => console.log(err))
    }, [])



    return (
        <div className='puerchases'>
            <h2 className='purchases__title'>My Purchases</h2>
            <div className='purchases__container'>
                {
                    purchases?.map(purchase => (
                        <CardPurchase
                            key={purchase.id}
                            purchase={purchase}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Purchases
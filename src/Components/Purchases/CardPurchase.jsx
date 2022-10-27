import React from 'react'

const CardPurchase = ({purchase}) => {

    return (
        <article className='purchases-container-general'>
            <header>
                {purchase.updatedAt}    
            </header>
            <div className='purchases-container-general__info'>
                {
                    purchase.cart.products.sort().map(product => (
                        <section className='purchases-container' key={product.id}>
                            <h3>{product.title}</h3>
                            <span>{product.productsInCart.quantity}</span>
                            <div>${product.price}</div>
                        </section>
                    ))
                }
            </div>
        </article>
    )
}

export default CardPurchase
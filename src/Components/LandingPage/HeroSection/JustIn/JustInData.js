import React from 'react'
import styles from './JustIn.module.css'

export default function Product({image, title, pricingText}) {
    return (
       
            <div className={styles.card}>
                <img className={styles.productImage} src={image} />
                <h2>{title}</h2>
                <p className={styles.price}>{pricingText}</p>
                <button className={styles.button}>Add to Cart</button>

            </div>
        
    )
}

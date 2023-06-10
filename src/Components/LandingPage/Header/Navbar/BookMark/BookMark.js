import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './BookMark.module.css'

export default function BookMark() {
    const getBookMarkedProduct = useSelector(state => state.myProducts.bookMarkedProducts)
    console.log(getBookMarkedProduct)
    return (
        <div className={styles.products}>
            {
                getBookMarkedProduct.map((product) => (
                    <div className={styles.lipsProduct}>
                        <img className={styles.lipsImage} src={product.image_link} />
                        <p key={product.id} className={styles.productName}>{product.name}</p>
                        <button className={styles.lipsButton}>Add to Cart</button>

                    </div>
                ))
            }

        </div>
    )
}

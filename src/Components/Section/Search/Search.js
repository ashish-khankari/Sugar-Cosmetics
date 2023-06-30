import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Search.module.css'

export default function Search() {
    const searchedData = useSelector(state => state.myProducts.dataFound)
    return (
        <div className={styles.mappedData}>
            {
                searchedData.map((product) => (
                    <div className={styles.card} key={product.id}>

                        <div className={styles.imagess}>
                            <img src={product.image_link} className={styles.image} alt="" />
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.row}>
                                <div className={styles.cardTitle}>
                                    {/* <h4>{product.name}</h4> */}
                                    <h3>${product.price}</h3>
                                </div>
                                <div className={styles.viewBtn}>
                                    <a href="">View Details</a>
                                </div>
                            </div>
                            <hr />
                            <div className={styles.name}>
                                <h4>{product.name}</h4>
                            </div>
                            <div className={styles.btnGrp}>
                                <div className={styles.btn}>
                                    <button /*onClick={() => addProducttoCart(product)}*/>Add to Cart</button>
                                </div>

                                <div /*onClick={() => addedToBookmarkList(product)}*/>
                                    {/* <Like /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

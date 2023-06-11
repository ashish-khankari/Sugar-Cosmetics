import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart, getBlushData } from '../../../store/slices/productSlice'
import styles from './Brushes.module.css'


export default function Brushes() {
  const dispatch = useDispatch()
  const blushProducts = useSelector(state => state.myProducts.blushProduct)
  console.log(blushProducts)
  useEffect(() => {
    dispatch(getBlushData())
  }, [])


  const addProducttoCart = (product) => {
    dispatch(addtoCart(product))
  }


  return (
    <div className={styles.products}>
      {blushProducts.map((product) => (
        <div className={styles.lipsProduct}>
          <img className={styles.lipsImage} src={product.image_link} />
          <div className={styles.name}>
            <p key={product.id} className={styles.productName}>{product.name}</p>
          </div>
          <button className={styles.lipsButton} onClick={() => addProducttoCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

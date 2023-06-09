import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlushData } from '../../../store/slices/productSlice'
import styles from './Brushes.module.css'


export default function Brushes() {
  const dispatch = useDispatch()
  const blushProducts = useSelector(state => state.myProducts.blushProduct)
  console.log(blushProducts)
  useEffect(() => {
    dispatch(getBlushData())
  }, [])
  return (
    <div className={styles.products}>
      {blushProducts.map((product) => (
        <div className={styles.lipsProduct}>
          <img className={styles.lipsImage} src={product.image_link} />
          <p key={product.id} className={styles.productName}>{product.name}</p>

          <button className={styles.lipsButton}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

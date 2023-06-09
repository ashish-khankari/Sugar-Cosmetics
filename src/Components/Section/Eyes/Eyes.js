import React, { useEffect } from 'react'
import styles from './Eyes.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { getEyesData } from '../../../store/slices/productSlice'


export default function Eyes() {
  const dispatch = useDispatch()
  const eyesData = useSelector(state => state.myProducts.eyesProduct)
  console.log(eyesData)
  useEffect(() => {
    dispatch(getEyesData())
  }, [])

  return (
    <div className={styles.products}>
      {
        eyesData.map((product) => (
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

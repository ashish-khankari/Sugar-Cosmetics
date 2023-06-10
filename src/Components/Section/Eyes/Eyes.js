import React, { useEffect } from 'react'
import styles from './Eyes.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { addtoCart, getEyesData } from '../../../store/slices/productSlice'


export default function Eyes() {
  const dispatch = useDispatch()
  const eyesData = useSelector(state => state.myProducts.eyesProduct)
  useEffect(() => {
    dispatch(getEyesData())
  }, [])
  
  const addProducttoCart = (product)=>{
    dispatch(addtoCart(product))
  }

  return (
    <div className={styles.products}>
      {
        eyesData.map((product) => (
          <div className={styles.lipsProduct}>
            <img className={styles.lipsImage} src={product.image_link} />
            <p key={product.id} className={styles.productName}>{product.name}</p>

            <button className={styles.lipsButton} onClick={()=>addProducttoCart(product)}>Add to Cart</button>
          </div>
        ))
      }
    </div>
  )
}

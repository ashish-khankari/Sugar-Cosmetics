import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getLipsData, addtoCart } from '../../../store/slices/productSlice'
import styles from './Lips.module.css'

export default function Lips() {
  const dispatch = useDispatch()
  const lipsData = useSelector(state => state.myProducts.products)

  useEffect(() => {
    dispatch(getLipsData())
  }, [])

  function addProducttoCart(product){
    dispatch(addtoCart(product))
  }


  return (
    <div className={styles.products}>
      {lipsData.map((product) => (
        <div className={styles.lipsProduct}>
          <img className={styles.lipsImage} src={product.image_link}/>
          <p key={product.id} className={styles.productName}>{product.name}</p>

          <button className={styles.lipsButton} onClick={()=>addProducttoCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

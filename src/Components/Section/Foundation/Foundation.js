import React, { useEffect } from 'react'
import { addtoCart, addtoFavourites, getFoundationData } from '../../../store/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Foundation.module.css'
import { AiOutlineHeart } from 'react-icons/ai'

export default function Foundation() {
  const dispatch = useDispatch()
  const foundationData = useSelector(state => state.myProducts.foundationProducts)
  useEffect(() => {
    dispatch(getFoundationData())
  }, [])

  function addProductToCart(product){
    dispatch(addtoCart(product))
  }

  function addtoBookmarkSection(product){
    dispatch(addtoFavourites(product))
  }
  return (
    <div className={styles.products}>
      <img src='https://sugar-mobile-application.s3.amazonaws.com/collection-web-banner/Face.jpg' className={styles.titleImage} />
      {foundationData.map((product) => (

        <div className={styles.lipsProduct}>
          <div className={styles.bookmarkSign} ><AiOutlineHeart onClick={()=>addtoBookmarkSection(product)} /></div>
          <img className={styles.lipsImage} src={product.image_link} />
          <p key={product.id} className={styles.productName}>{product.name}</p>
          <button className={styles.lipsButton} onClick={()=>addProductToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>

  )
}

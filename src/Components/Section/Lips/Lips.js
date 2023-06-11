import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getLipsData, addtoCart, addtoFavourites } from '../../../store/slices/productSlice'
import styles from './Lips.module.css'
import { AiOutlineHeart } from 'react-icons/ai'


export default function Lips() {
  const dispatch = useDispatch()
  const lipsData = useSelector(state => state.myProducts.products)

  const [bookmarkColor, setbookmarkColor] = useState(false)

  useEffect(() => {
    dispatch(getLipsData())
  }, [])

  function addProducttoCart(product) {
    dispatch(addtoCart(product))
  }

  function addedToBookmarkList(product) {
    // setbookmarkColor(!bookmarkColor)
    dispatch(addtoFavourites(product))
  }

  return (

    <div className={styles.products}>
      <img src='https://sugar-mobile-application.s3.amazonaws.com/collection-web-banner/Lips.jpg' className={styles.titleImage} />
      {lipsData.map((product) => (

        <div className={styles.lipsProduct}>
          <div className={styles.bookmarkSign} onClick={() => addedToBookmarkList(product)}><AiOutlineHeart /></div>
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

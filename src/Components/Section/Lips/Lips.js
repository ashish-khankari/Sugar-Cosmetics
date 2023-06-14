import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getLipsData, addtoCart, addtoFavourites } from '../../../store/slices/productSlice'
import styles from './Lips.module.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Filter from './Filter'

export default function Lips() {
  const dispatch = useDispatch()
  const lipsData = useSelector(state => state.myProducts.products)
  const cartData = useSelector(state => state.myProducts.cartProducts)

  // const [bookmarkColor, setbookmarkColor] = useState(false)

  useEffect(() => {
    dispatch(getLipsData())
  }, [])

  const showToastMessageforError = () => {
    toast.info('Product already addedto Cart !', {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  const showToastMessageforSuccess = () => {
    toast.success("Product succesfully added", {
      position: toast.POSITION.TOP_RIGHT
    })
  }


  function addProducttoCart(product) {
    // cartData.find((already)=>())
    if (cartData.find((item) => (item.id) === product.id)) {
      showToastMessageforError()
    } else {
      dispatch(addtoCart(product))
      showToastMessageforSuccess()
    }

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
      <ToastContainer/>
    </div>
  )
}

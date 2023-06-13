import React, { useEffect } from 'react'
import { addtoCart, addtoFavourites, getFoundationData } from '../../../store/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Foundation.module.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Foundation() {
  const dispatch = useDispatch()
  const foundationData = useSelector(state => state.myProducts.foundationProducts)
  const cartData = useSelector(state => state.myProducts.cartProducts)


  useEffect(() => {
    dispatch(getFoundationData())
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

  function addProductToCart(product) {
    if (cartData.find((item) => (item.id) === product.id)) {
      showToastMessageforError()
    } else {
      dispatch(addtoCart(product))
      showToastMessageforSuccess()
    }

  }

  function addtoBookmarkSection(product) {
    dispatch(addtoFavourites(product))
  }
  return (
    <div className={styles.products}>
      <img src='https://sugar-mobile-application.s3.amazonaws.com/collection-web-banner/Face.jpg' className={styles.titleImage} />
      {foundationData.map((product) => (

        <div className={styles.lipsProduct}>
          <div className={styles.bookmarkSign} ><AiOutlineHeart onClick={() => addtoBookmarkSection(product)} /></div>
          <img className={styles.lipsImage} src={product.image_link} />
          <div className={styles.name}>
            <p key={product.id} className={styles.productName}>{product.name}</p>
          </div>
          <button className={styles.lipsButton} onClick={() => addProductToCart(product)}>Add to Cart</button>
        </div>
      ))}

      <ToastContainer />
    </div>


  )
}

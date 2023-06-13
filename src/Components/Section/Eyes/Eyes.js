import React, { useEffect } from 'react'
import styles from './Eyes.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { addtoCart, addtoFavourites, getEyesData } from '../../../store/slices/productSlice'
import { AiOutlineHeart } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Eyes() {
  const dispatch = useDispatch()
  const eyesData = useSelector(state => state.myProducts.eyesProduct)
  const cartData = useSelector(state=>state.myProducts.cartProducts)

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

  useEffect(() => {
    dispatch(getEyesData())
  }, [])

  const addProducttoCart = (product) => {
    if (cartData.find((item) => (item.id) === product.id)) {
      showToastMessageforError()
    } else {
      dispatch(addtoCart(product))
      showToastMessageforSuccess()
    }

  }

  function addedToBookmarkList(product) {
    dispatch(addtoFavourites(product))
  }

  return (
    <div className={styles.products}>
      {
        eyesData.map((product) => (
          <div className={styles.lipsProduct}>
            <div className={styles.bookmarkSign} onClick={() => addedToBookmarkList(product)}><AiOutlineHeart /></div>
            <img className={styles.lipsImage} src={product.image_link} />
            <div className={styles.name}>
              <p key={product.id} className={styles.productName}>{product.name}</p>
            </div>

            <button className={styles.lipsButton} onClick={() => addProducttoCart(product)}>Add to Cart</button>
          </div>
        ))
      }
      <ToastContainer/>
    </div>
  )
}

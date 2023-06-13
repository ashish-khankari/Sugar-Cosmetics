import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart, getBlushData, addtoFavourites } from '../../../store/slices/productSlice'
import styles from './Brushes.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineHeart } from 'react-icons/ai'


export default function Brushes() {
  const dispatch = useDispatch()
  const blushProducts = useSelector(state => state.myProducts.blushProduct)
  const cartProductsData = useSelector(state => state.myProducts.cartProducts)
  console.log(blushProducts)

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
    dispatch(getBlushData())
  }, [])


  const addProducttoCart = (product) => {
    const repeatedData = cartProductsData.find((item) => item.id === product.id)
    if (repeatedData) {
      showToastMessageforError()
    } else {
      dispatch(addtoCart(product))
      showToastMessageforSuccess()
    }
  }

  function addtoBookmarkSection(product){
    dispatch(addtoFavourites(product))
  }


  return (
    <div className={styles.products}>
      {blushProducts.map((product) => (
        <div className={styles.lipsProduct}>
          <div className={styles.bookmarkSign} ><AiOutlineHeart onClick={()=>addtoBookmarkSection(product)} /></div>
          <img className={styles.lipsImage} src={product.image_link} />
          <div className={styles.name}>
            <p key={product.id} className={styles.productName}>{product.name}</p>
          </div>
          <button className={styles.lipsButton} onClick={() => addProducttoCart(product)}>Add to Cart</button>

        </div>
      ))}
      <ToastContainer />

    </div>
  )
}

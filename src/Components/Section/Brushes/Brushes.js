import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart, getBlushData, addtoFavourites } from '../../../store/slices/productSlice'
import styles from './Brushes.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineHeart } from 'react-icons/ai'
import Like from '../Lips/BookMarkBtn/Like';


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
    <div className={styles.container}>
    {
      blushProducts.map((product) => (
        <div className={styles.card}>
          <div className={styles.imagess}>
            <img src={product.image_link} className={styles.image} alt="" />
          </div>
          <div className={styles.cardBody}>
            <div className={styles.row}>
              <div className={styles.cardTitle}>
                {/* <h4>{product.name}</h4> */}
                <h3>${product.price}</h3>
              </div>
              <div className={styles.viewBtn}>
                <a href="">View Details</a>
              </div>
            </div>
            <hr />
            <div className={styles.name}>
              <h4>{product.name}</h4>
            </div>
            <div className={styles.btnGrp}>
              <div className={styles.btn}>
                <button onClick={() => addProducttoCart(product)}>Add to Cart</button>
              </div>

              <Like />
            </div>
          </div>
        </div>
      ))
    }
    <ToastContainer />

  </div>
  )
}

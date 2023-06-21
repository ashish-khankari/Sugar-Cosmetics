import React, { useEffect } from 'react'
import { addtoCart, addtoFavourites, getFoundationData } from '../../../store/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Foundation.module.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Like from '../Lips/BookMarkBtn/Like'


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
    <div className={styles.container}>
      <img src='https://sugar-mobile-application.s3.amazonaws.com/collection-web-banner/Face.jpg' className={styles.titleImage}/>
      {
        foundationData.map((product) => (
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
                  <button onClick={() => addProductToCart(product)}>Add to Cart</button>
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

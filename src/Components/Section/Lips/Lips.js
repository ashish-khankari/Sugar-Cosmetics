import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getLipsData, addtoCart, addtoFavourites } from '../../../store/slices/productSlice'
import styles from './Lips.module.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Like from './BookMarkBtn/Like'

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
    <div className={styles.container}>
      {
        lipsData.map((product) => (
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

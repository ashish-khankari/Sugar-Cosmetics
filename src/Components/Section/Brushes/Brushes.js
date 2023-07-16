import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart, getBlushData, addtoFavourites, sortfromHightoLow, sortfromLowtoHigh, sortbyName } from '../../../store/slices/productSlice'
import styles from './Brushes.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineHeart, AiFillHome } from 'react-icons/ai'
import Like from '../Lips/BookMarkBtn/Like';
import { Link } from 'react-router-dom'


export default function Brushes() {
  const dispatch = useDispatch()
  const blushProducts = useSelector(state => state.myProducts.blushProduct)
  const cartProductsData = useSelector(state => state.myProducts.cartProducts)
  const selectBookmarkedProduct = useSelector(state => state.myProducts.bookMarkedProducts)

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

  function addedToBookmarkList(product) {
    if (selectBookmarkedProduct.find((item) => (item.id) === product.id)) {
      return;
    } else {
      dispatch(addtoFavourites(product))
    }

  }

  function sortAlphabetically() {
    dispatch(sortbyName())
  }

  function sortHightoLow() {
    dispatch(sortfromHightoLow())
  }

  function sortLowtoHigh() {
    dispatch(sortfromLowtoHigh())
  }


  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.pagePosition}>
          <div className={styles.homeIcon}>
            <Link to={'/'}><AiFillHome className={styles.home} /></Link>
            <p>/ Brushes</p>
          </div>
          <div className={styles.buttons}>
            <div className={styles.radiobutton}>
              <input type="radio" id="html" name="fav_language" value="HTML" onClick={sortAlphabetically} />
              <lable>Name</lable>
            </div>

            <div className={styles.radiobutton}>
              <input type="radio" id="html" name="fav_language" value="HTML" onClick={sortHightoLow} />
              <lable>Price - High to Low</lable>
            </div>

            <div className={styles.radiobutton}>
              <input type="radio" id="html" name="fav_language" value="HTML" onClick={sortLowtoHigh} />
              <lable>Price - Low to High</lable>
            </div>

          </div>
        </div>
        <div className={styles.mappedData}>
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

                    <div onClick={() => addedToBookmarkList(product)}>
                      <Like />
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>


        <ToastContainer />
      </div>
    </div>
  )
}

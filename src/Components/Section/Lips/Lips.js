import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getLipsData, addtoCart, addtoFavourites, sortbyName, sortfromHightoLow,sortfromLowtoHigh } from '../../../store/slices/productSlice'
import styles from './Lips.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Like from './BookMarkBtn/Like'


export default function Lips() {
  const dispatch = useDispatch()
  const lipsData = useSelector(state => state.myProducts.products)
  const cartData = useSelector(state => state.myProducts.cartProducts)

  // console.log(lipsData)
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

  function sortAlphabetically() {
    dispatch(sortbyName());
  }

  function sortHightoLow(){
    dispatch(sortfromHightoLow())
  }

  function sortLowtoHigh(){
    dispatch(sortfromLowtoHigh())
  }


  return (
    <div className={styles.container} >
      <div>
        <img src='https://sugar-mobile-application.s3.amazonaws.com/collection-web-banner/Lips.jpg' className={styles.titleImage} />
      </div>

      <div className={styles.innerContainer}>
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

        <div className={styles.mappedData}>
          {
            lipsData.map((product) => (
              <div className={styles.card} key={product.id}>

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
      </div>


      <ToastContainer />

    </div>
  )
}

import React, { useEffect, useState } from 'react'
import styles from './Eyes.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { addtoCart, addtoFavourites, getEyesData, sortbyName, sortfromHightoLow, sortfromLowtoHigh } from '../../../store/slices/productSlice'
import { AiOutlineHeart, AiFillHome } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Like from '../Lips/BookMarkBtn/Like'
import { Link } from 'react-router-dom'

export default function Eyes() {
  const dispatch = useDispatch()
  const eyesData = useSelector(state => state.myProducts.eyesProduct)
  const cartData = useSelector(state => state.myProducts.cartProducts)
  const selectBookmarkedProduct = useSelector(state => state.myProducts.bookMarkedProducts)
  const [filteredValues, setFilteredValues] = useState([])
  const [showList, setShowList] = useState(false)

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
    if (selectBookmarkedProduct.find((item) => (item.id) === product.id)) {
      return;
    } else {
      dispatch(addtoFavourites(product))
    }

  }

  // function sortAlphabetically() {
  //   dispatch(sortbyName())
  // }

  // function sortHightoLow() {
  //   dispatch(sortfromHightoLow())
  // }

  // function sortLowtoHigh() {
  //   dispatch(sortfromLowtoHigh())
  // }

  function filterData() {
    // alert("Hello")
    setFilteredValues(['Filter By Name', 'Prices from High to Low', 'Prices from Low to High'])
    setShowList((prevShowFilter)=>!prevShowFilter)
  }

  function filtermyData(item) {
    // alert(`${item}`)
    if (item == "Filter By Name") {
      dispatch(sortbyName())
    } else if (item == "Prices from High to Low") {
      dispatch(sortfromHightoLow())
    } else {
      dispatch(sortfromLowtoHigh())
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.pagePosition}>
          <div className={styles.homeIcon}>
            <Link to={'/'}><AiFillHome className={styles.home} /></Link>
            <p>/ Eyes</p>
          </div>
          {/* <div className={styles.buttons}>
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

          </div> */}

          <div className={styles.filter}>
            <button onClick={filterData} className={styles.filterButton}>Filter</button>
            { showList &&
              filteredValues.map((item) => {
                return (
                  <ul>
                    <li onClick={() => filtermyData(item)}>{item}</li>
                  </ul>
                )
              })
            }
          </div>
        </div>
        <div className={styles.mappedData}>
          {
            eyesData.map((product) => (
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
      </div>
      <ToastContainer />

    </div>
  )
}

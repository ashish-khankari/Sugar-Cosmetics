import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getLipsData, addtoCart, addtoFavourites, sortbyName, sortfromHightoLow, sortfromLowtoHigh } from '../../../store/slices/productSlice'
import styles from './Lips.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Like from './BookMarkBtn/Like'
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'


export default function Lips() {
  const dispatch = useDispatch()
  const lipsData = useSelector(state => state.myProducts.products)
  const cartData = useSelector(state => state.myProducts.cartProducts)
  const selectBookmarkedProduct = useSelector(state => state.myProducts.bookMarkedProducts)
  const [filteredValues, setFilteredValues] = useState([])
  const [showList, setShowList] = useState(false)

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
    if (selectBookmarkedProduct.find((item) => (item.id) === product.id)) {
      return;
    } else {
      dispatch(addtoFavourites(product))
    }

  }

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
    <div className={styles.container} >
      <div>
        <img src='https://sugar-mobile-application.s3.amazonaws.com/collection-web-banner/Lips.jpg' className={styles.titleImage} />
      </div>
      <div className={styles.innerContainer}>
        <div className={styles.pagePosition}>
          <div className={styles.homeIcon}>
            <Link to={'/'}><AiFillHome className={styles.home} /></Link>
            <p>/ Lips</p>
          </div>
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

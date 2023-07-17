import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiStoreAlt, BiUser } from 'react-icons/bi'
import { CiDiscount1 } from 'react-icons/ci'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { getBlushData, getEyesData, getFoundationData, getLipsData, searchReducer } from '../../../../store/slices/productSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import {} from 


export default function Navbar() {
  const navElements = ["LIPS", "EYES", "FOUNDATION", "BRUSHES", "OFFERS"]
  const [menu, setMenu] = useState(false)
  const [searchData, setSearchData] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const showToastMessageforError = () => {
    toast.info('Please Enter Valid Input!', {
      position: toast.POSITION.TOP_CENTER
    });
  };

  function handleMenuBar() {
    setMenu(!menu)
  }

  useEffect(() => {
    dispatch(getLipsData())
    dispatch(getBlushData())
    dispatch(getEyesData())
    dispatch(getFoundationData())
  }, [])

  function getSearchData() {
    if (searchData === '') {
      showToastMessageforError()
    } else {
      dispatch(searchReducer(searchData))
      navigate('/search')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to={'/'}><img src='https://1000logos.net/wp-content/uploads/2020/07/SUGAR-Cosmetics-Logo1.jpg' className={styles.sugarLogo} alt='logo' /></Link>
      </div>
      <div className={styles.user}>
        <div className={styles.menuUser}>
          <ul className={`${styles.lists} ${menu ? styles.showBar : ""}`} >
            {navElements.map((navElement, index) => (
              <li key={index} className={styles.list}>
                <Link className={styles.link} to={`/${navElement.toLowerCase()}`}>
                  <p className={styles.elements} onClick={handleMenuBar}>{navElement}</p>
                </Link>
              </li>

            ))}
            <div className={styles.searchContainer}>
              <input type="text" placeholder="Try Eye..." name="search" onChange={(e) => setSearchData(e.target.value)} className={styles.searchField} />
              <button type="submit" onClick={getSearchData} className={styles.searchBtn}><i className="fa fa-search"></i></button>
            </div>
          </ul>
        </div>
      </div>

      <div className={styles.icons}>
        <Link to={'/bookmark'}> <AiOutlineHeart className={styles.icon} /></Link>
        <Link to={'/cart'}><BiStoreAlt className={styles.icon} /></Link>
        <CiDiscount1 className={styles.icon} />
      </div>
      <AiOutlineMenu
        className={styles.menuBar}
        onClick={handleMenuBar} />
      <ToastContainer />
    </div>
  )
}

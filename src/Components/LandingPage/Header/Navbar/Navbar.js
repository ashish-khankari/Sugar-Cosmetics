import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiStoreAlt, BiUser } from 'react-icons/bi'
import { CiDiscount1 } from 'react-icons/ci'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
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
        <Link to={'/'}><img src='data:image/png;base64,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' className={styles.sugarLogo} alt='logo' /></Link>
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
          </ul>
        </div>

      </div>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Try Eye..." name="search" onChange={(e) => setSearchData(e.target.value)} />
        <button type="submit" onClick={getSearchData}><i className="fa fa-search"></i></button>
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

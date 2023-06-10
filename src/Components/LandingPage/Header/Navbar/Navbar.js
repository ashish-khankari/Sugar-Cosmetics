import React from 'react'
import styles from './Navbar.module.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiStoreAlt } from 'react-icons/bi'
import { CiDiscount1 } from 'react-icons/ci'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div>
        <Link to={'/'}><img src='https://entrackr.com/storage/2022/03/Sugar.jpg' className={styles.sugarLogo} alt='logo' /></Link>

      </div>

      <div className={styles.user}>
        Hi Sugar Fan
      </div>
      <div className={styles.icons}>
        <AiOutlineHeart className={styles.icon} />
        <Link to={'/cart'}><BiStoreAlt className={styles.icon} /></Link>
        <CiDiscount1 className={styles.icon} />
      </div>
    </div>
  )
}

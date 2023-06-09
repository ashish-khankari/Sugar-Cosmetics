import React from 'react'
import styles from './Navbar.module.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiStoreAlt } from 'react-icons/bi'
import { CiDiscount1 } from 'react-icons/ci'

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div>
        <img src='https://entrackr.com/storage/2022/03/Sugar.jpg' className={styles.sugarLogo} alt='logo' />
      </div>

      <div className={styles.user}>
        Hi Sugar Fan
      </div>
      <div className={styles.icons}>
        <AiOutlineHeart />
        <BiStoreAlt />
        <CiDiscount1 />
      </div>
    </div>
  )
}

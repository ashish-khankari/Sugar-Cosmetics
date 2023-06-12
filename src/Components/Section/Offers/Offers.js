import React from 'react'
import styles from './Offers.module.css'
import { Offersdata } from './OffersData'

export default function Offers() {
  return (

    <div className={styles.mainContainer}>
      <div className={styles.heading}>
        <h1 className={styles.text}>Offers</h1>
      </div>

      <div className={styles.container}>

        {
          Offersdata.map((item) => (
            <div className={styles.imagesContainer}>
              <img className={styles.images} src={item} />
              <div>
                <p className={styles.code}>Copy Code</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>

  )
}

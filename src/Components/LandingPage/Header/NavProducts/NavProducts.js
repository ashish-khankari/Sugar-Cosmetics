import React from 'react'
import styles from './NavProducts.module.css'

export default function NavProducts() {
    const navElements = ["LIPS","EYES","FACE", "NAILS", "SKINCARE","ACCESSORIES", "GIFTS & KITS","BESTSELLERS"," NEW LAUNCHES","OFFERS","BLOG","STORES"]
  return (
    <div className={styles.container}>
      
            {
                navElements.map((item)=>(
                    <ul>
                        <li className={styles.list}>{item}</li>
                    </ul>
                ))
            }
            <ul>
                
            </ul>
    </div>
  )
}

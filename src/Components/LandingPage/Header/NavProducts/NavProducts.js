import React from 'react'
import styles from './NavProducts.module.css'
import { Link } from 'react-router-dom'

export default function NavProducts() {
  const navElements = ["LIPS","EYES","FOUNDATION", "SKINCARE", "BRUSHES","OFFERS","BLOG","STORES"]
  
  return (
    <div className={styles.container}>
      <ul className={styles.lists}>
        {navElements.map((navElement, index) => (
          <li key={index} className={styles.list}>
            <Link className={styles.link} to={`/${navElement.toLowerCase()}`}>
             <p className={styles.elements}>{navElement}</p> 
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

import React from 'react'
import styles from './Cart.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { removefromCart } from '../../../../../store/slices/productSlice'
import {RiDeleteBin6Line} from 'react-icons/ri'


export default function Cart() {
  const fetchDataFromCart = useSelector(state => state.myProducts.cartProducts)
  const dispath = useDispatch()
  // console.log(fetchDataFromCart)

  function removeCartItem(product){
    dispath(removefromCart(product))
  }
  return (
    <div className={styles.products}>
      {
        fetchDataFromCart.map((product) => (
          <div className={styles.lipsProduct}>
            <img className={styles.lipsImage} src={product.image_link} />
            <p key={product.id} className={styles.productName}>{product.name}</p>
            <p className={styles.price}>{product.price_sign + ""+ product.price}</p>
            <RiDeleteBin6Line className={styles.deleteButton} onClick={()=>removeCartItem(product)}/>
          </div>
        ))
      }

    </div>
  )
}

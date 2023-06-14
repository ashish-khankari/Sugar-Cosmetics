import React from 'react'
import styles from './Cart.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrementCartCount, incrementCartCount, removefromCart } from '../../../../../store/slices/productSlice'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { BsCurrencyDollar } from 'react-icons/bs'

export default function Cart() {
  const fetchDataFromCart = useSelector(state => state.myProducts.cartProducts)
  const dispatch = useDispatch()

  function removeCartItem(product) {
    dispatch(removefromCart(product))
  }

  function increamentValue(product) {
    dispatch(incrementCartCount(product));
  }
  
  function decreamentValue(product) {
    dispatch(decrementCartCount(product));
  }
  

  return (
    <div className={styles.CartProducts}>
      <div className={styles.products}>
        {
          
          fetchDataFromCart.map((product) => (
            <div className={styles.lipsProduct}>
              <img className={styles.lipsImage} src={product.image_link} />
              {/* <p key={product.id} className={styles.productName}>{product.name}</p> */}
              <p className={styles.price}>{product.price}</p>
              <p><button onClick={() => increamentValue(product)}>+</button>{product.quantity}<button onClick={() => decreamentValue(product)}>-</button></p>
              <RiDeleteBin6Line className={styles.deleteButton} onClick={() => removeCartItem(product)} />
            </div>
          ))
        }

        <div className={styles.checkOutCart}>

        </div>
      </div>
    </div>

  )
}

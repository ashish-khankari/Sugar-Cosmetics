import React from 'react'
import styles from './Cart.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrementCartCount, incrementCartCount, removefromCart } from '../../../../../store/slices/productSlice'
import { RiDeleteBin6Line } from 'react-icons/ri'


export default function Cart() {
  const fetchDataFromCart = useSelector(state => state.myProducts.cartProducts)
  const cartTotal = useSelector(state => state.myProducts.value)
  const dispath = useDispatch()
  // console.log(fetchDataFromCart)

  function removeCartItem(product) {
    dispath(removefromCart(product))
  }

  function increamentValue() {
    dispath(incrementCartCount())
  }

  function decreamentValue() {
    dispath(decrementCartCount())
  }
  return (
    <div className={styles.CartProducts}>
      <div className={styles.products}>
        {
          fetchDataFromCart.map((product) => (
            <div className={styles.lipsProduct}>
              <img className={styles.lipsImage} src={product.image_link} />
              <p key={product.id} className={styles.productName}>{product.name}</p>
              <p className={styles.price}>{product.price_sign + "" + product.price}</p>
              <p><button onClick={increamentValue}>+</button> {cartTotal} <button onClick={decreamentValue}>-</button></p>
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

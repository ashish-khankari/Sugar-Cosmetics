import React from 'react'
import styles from './Cart.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrementCartCount, incrementCartCount, removefromCart } from '../../../../../store/slices/productSlice'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { BsCurrencyDollar } from 'react-icons/bs'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export default function Cart() {
  const fetchDataFromCart = useSelector(state => state.myProducts.cartProducts)

  let countIncrement = 0
  let countDecrement = 0
  for (let i = 0; i < fetchDataFromCart.length; i++) {
    // console.log(fetchDataFromCart[i].totalValue)
    let initialValue = fetchDataFromCart[0].totalValue
    console.log(initialValue)
    countIncrement = countIncrement + fetchDataFromCart[i].totalValue
    countDecrement = countDecrement - fetchDataFromCart[i].totalValue
    console.log(countIncrement + initialValue)

  }
  // const totalSum = fetchDataFromCart.reduce((sum, product) => sum + product.totalValue, 0);

  // console.log(countDecrement)

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
            <div className={styles.lipsProduct} key={product.id}>
              <img className={styles.lipsImage} src={product.image_link} />
              <div className={styles.NameandPrice}>
                <p>{product.name}</p>
                <p className={styles.price}>{product.price}</p>
              </div>
              <p><AiOutlinePlus onClick={() => increamentValue(product)} />{product.quantity} <AiOutlineMinus onClick={() => decreamentValue(product)} />  </p>
              <RiDeleteBin6Line className={styles.deleteButton} onClick={() => removeCartItem(product)} />
            </div>
          ))
        }

        <div className={styles.checkOutCart}>
          <h1>Total Sum</h1>
          {
            increamentValue ? countIncrement : countDecrement
          }
          {/* {totalSum} */}
        </div>
      </div>
    </div>

  )
}

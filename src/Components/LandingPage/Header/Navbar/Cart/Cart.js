import React from 'react'
import styles from './Cart.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrementCartCount, incrementCartCount, removefromCart } from '../../../../../store/slices/productSlice'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'

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
    <div className={styles.cartContainer}>
      <h2>Shopping Cart</h2>
      {fetchDataFromCart.cartItems === 0 ? (
        <div className={styles.cartEmpty}>
          <p>Your cart is currently empty</p>
          <div className={styles.startShopping}>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.titles}>
            <h3 className={styles.productTitle}>Product</h3>
            <h3 className={styles.price}>Price</h3>
            <h3 className={styles.quantity}>Quantity</h3>
            <h3 className={styles.total}>Total</h3>
          </div>
          <div className={styles.cartItems}>
            {fetchDataFromCart &&
              fetchDataFromCart.map((product) => (
                <div className={styles.cartItem} key={product.id}>
                  <div className={styles.cartProduct}>
                    <img src={product.image_link} alt={product.name} />
                    <div>
                      <h3>{product.name}</h3>
                      <button onClick={() => removeCartItem(product)}>
                        <AiFillDelete className={styles.removeItem}/>
                      </button>
                    </div>
                  </div>
                  <div className={styles.cartProductPrice}>${product.price}</div>
                  <div className={styles.cartProductQuantity}>
                    <button onClick={() => decreamentValue(product)}>
                      -
                    </button>
                    <div className={styles.count}>{product.quantity}</div>
                    <button onClick={() => increamentValue(product)}>+</button>
                  </div>
                  <div className={styles.cartProductTotalPrice}>
                    ${product.price * product.quantity}
                  </div>
                </div>
              ))}
          </div>
          <div className={styles.cartSummary}>
            <button className={styles.clearBtn}>
            Clear Cart
          </button>
            <div className={styles.cartCheckout}>
              <div className={styles.subTotal}>
                <span>Subtotal: </span>
                <span className={styles.amount}
                >{
                    increamentValue ? countIncrement : countDecrement
                  }
                </span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button>Check out</button>
              <div className={styles.continueShopping}>
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    // <div className={styles.CartProducts}>
    //   <div className={styles.products}>
    //     {
    //       fetchDataFromCart.map((product) => (
    //         <div className={styles.lipsProduct} key={product.id}>
    //           <img className={styles.lipsImage} src={product.image_link} />
    //           <div className={styles.NameandPrice}>
    //             <p>{product.name}</p>
    //             <p className={styles.price}>{product.price}</p>
    //           </div>
    //           <p><AiOutlinePlus onClick={() => increamentValue(product)} />{product.quantity} <AiOutlineMinus onClick={() => decreamentValue(product)} />  </p>
    //           <AiFillDelete className={styles.deleteButton} onClick={() => removeCartItem(product)} />
    //         </div>
    //       ))
    //     }

    //     <div className={styles.checkOutCart}>
    //       <h1>Total Sum</h1>
    //       {
    //         increamentValue ? countIncrement : countDecrement
    //       }
    //       {/* {totalSum} */}
    //     </div>
    //   </div>
    // </div>

  )
}


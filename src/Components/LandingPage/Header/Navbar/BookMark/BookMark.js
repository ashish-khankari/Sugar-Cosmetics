import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './BookMark.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addtoCart } from '../../../../../store/slices/productSlice';

export default function BookMark() {
    const showToastMessageforError = () => {
        toast.info('Product already addedto Cart !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const showToastMessageforSuccess = () => {
        toast.success("Product succesfully added", {
            position: toast.POSITION.TOP_RIGHT
        })
    }


    const getBookMarkedProduct = useSelector(state => state.myProducts.bookMarkedProducts)
    const cartData = useSelector(state => state.myProducts.cartProducts)

    const dispatch = useDispatch()

    function addProducttoCart(product) {

        if (cartData.find((item) => (item.id) === product.id)) {
            showToastMessageforError()
        } else {
            dispatch(addtoCart(product))
            showToastMessageforSuccess()
        }
    }
    return (
        <div className={styles.mappedData}>
            {
                getBookMarkedProduct.map((product) => (
                    <div className={styles.card} key={product.id}>

                        <div className={styles.imagess}>
                            <img src={product.image_link} className={styles.image} alt="" />
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.row}>
                                <div className={styles.cardTitle}>
                                    <h3>${product.price}</h3>
                                </div>
                                <div className={styles.viewBtn}>
                                    <a href="">View Details</a>
                                </div>
                            </div>
                            <hr />
                            <div className={styles.name}>
                                <h4>{product.name}</h4>
                            </div>
                            <div className={styles.btnGrp}>
                                <div className={styles.btn}>
                                    <button onClick={() => addProducttoCart(product)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

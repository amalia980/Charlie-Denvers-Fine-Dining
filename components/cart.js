import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import styles from "../styles/Cart.module.css"
import { IconButton, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const Cart = () => {

    const { cart, setCart } = useContext(CartContext);
  
    //calculate the price of all items
    const itemsPrice = cart.reduce((a, b) => a + parseInt(b.price) * parseInt(b.quantity), 0);
  
  //remove each item with 1
  const removeProduct = (product) => {
    const exist = cart.find((x) => x._id === product._id);
    if (exist.quantity === 1) {
        setCart(cart.filter((x) => x._id !== product._id));
    } else {
        setCart(cart.map((x => x._id === product._id ? {...exist, 
            quantity: exist.quantity - 1} 
            : x)))
    }
  }
  
    const { setCartVisible } = useContext(CartContext) //basket state
  
    const handleNavigate = () => {
      if(cart.length > 0) {
      setCartVisible(false)
        navigate('/checkout')
      }
    }
  
    const handleClose = () => {
      setCartVisible(false)
    }
  
    return (
      <div style={{display: "flex"}}>
        <div onClick={handleClose} className={styles.underlay}></div>
        <div className={styles.shopping_container}>
          <div className={styles.shopping_cart_header}>
            <Typography variant="body1" style={{ color: "white" }}>SHOPPING CART</Typography>
            <IconButton onClick={handleClose}>
              <Close style={{color: "white"}} />
          </IconButton>
          </div>
          <div className={styles.all_products_container}>
          <div className={styles.cart_is_empty}>{cart.length === 0 && <p>Shopping cart is empty...</p>}</div>
            {cart.map((item => (
              <div key={item._id} className={styles.products_wrapper}>
                {/* mappning för produkter */}
                {/* <img className="img-productera" src={item.img[0].img} alt={item.title} /> */}
                <div className={styles.procuct_right_info}>
                  <div className={styles.title_n_price}>
                    <p>{item.title}</p>
                    <p className={styles.price_txt}>${item.price}</p>
                  </div>
  
                  <div className={styles.qty_size_remove_div}>
                    <div className={styles.size_n_qty}>
                      <p className={styles.qty_txt}>Quantity: {item.quantity}</p>
                    </div>
  
                    <p onClick={() => removeProduct(item)} className={styles.remove_product}>Remove</p>
                  </div>
                </div>
              </div>
            )))}
          </div>
  
          <div className={styles.totalPrice_toCheckout_div}>
            <div className={styles.total_price_div}>
              <h4>Total price:</h4>
              <h4>${itemsPrice}</h4>
            </div>
            <button>TO CHECKOUT</button>
          </div>
        </div>
      </div>
    )
  }
  
export default Cart;
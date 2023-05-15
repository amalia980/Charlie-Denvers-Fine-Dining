import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import styles from "../styles/Cart.module.css";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Image from "next/image";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const router = useRouter();
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const shoppingCart = useSelector((state) => state.cart);
  const quantity = useSelector((state) => state.cart.quantity);

  //calculate the price of all items
  const itemsPrice = cart.reduce(
    (a, b) => a + parseInt(b.price) * parseInt(b.quantity),
    0
  );

  //remove each item with 1
  const removeProduct = (product) => {
    const exist = cart.find((x) => x._id === product._id);
    if (exist.quantity === 1) {
      setCart(cart.filter((x) => x._id !== product._id));
    } else {
      setCart(
        cart.map((x) =>
          x._id === product._id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const { setCartVisible } = useContext(CartContext); //basket state

  const handleNavigate = () => {
    if (quantity > 0) {
      router.push("/Checkout");
      setCartVisible(false);
    }
  };

  const handleClose = () => {
    setCartVisible(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <div onClick={handleClose} className={styles.underlay}></div>
      <div className={styles.shopping_container}>
        <div className={styles.shopping_cart_header}>
            SHOPPING CART
          <button onClick={handleClose}>
            {/* insert icon */}
            Shopping cart
          </button>
        </div>
        <div className={styles.all_products_container}>
          <div className={styles.cart_is_empty}>
            {quantity.length === 0 && <p>Shopping cart is empty...</p>}
          </div>
          {shoppingCart.products.map((item) => (
            <div key={item._id} className={styles.products_wrapper}>
              <Image
                className="img-productera"
                width="60"
                height="60"
                src={item.img}
                alt={item.title}
              />
              <div className={styles.procuct_right_info}>
                <div className={styles.title_n_price}>
                  <p>{item.title}</p>
                  <p className={styles.price_txt}>${item.price}</p>
                </div>

                <div className={styles.qty_size_remove_div}>
                  <div className={styles.size_n_qty}>
                    <p className={styles.qty_txt}>Quantity: {item.quantity}</p>
                  </div>
{/* 
                  {item.extras.map((extra) => {
                    <p key={extra._id} >{extra.text}</p>;
                  })} */}

                  <p
                    onClick={() => removeProduct(item)}
                    className={styles.remove_product}
                  >
                    Remove
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.totalPrice_toCheckout_div}>
          <div className={styles.total_price_div}>
            <h4>Total price:</h4>
            <h4>${totalPrice}</h4>
          </div>
            <button onClick={handleNavigate}>TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

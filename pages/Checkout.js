import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { reset } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/OrderDetail.module.css";
import { useRouter } from "next/router";

export default function Home() {

  const cart = useSelector((state) => state.cart);
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [totalPrice, setTotalPrice] = useState(40);
  const [open, setOpen] = useState(false);
  const amount = cart.totalPrice;
  const currency = "GBP";
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        console.log(res.data);
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const ButtonWrapper = ({ currency, showSpinner }) => {

    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function (details) {
            const shipping = details.purchase_units[0].shipping;
            createOrder({
              customer: shipping.name.full_name,
              address: shipping.address.address_line_1,
              totalPrice: cart.totalPrice,
              method: 1,
            });
          });
        }}
      />
    </>
  );
  };

  const handleClick = () => {
    createOrder({ customer, address, totalPrice, method: 0 });
  };

  return (
    <div className={styles.wrapperCheckout}>

      <h1>Checkout</h1>
              <div className={styles.left}>
        <table className={styles.table}>
          <thead>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.products.map(product => (
                  <tr className={styles.tr} key={product._id}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                      src={product.img}
                      width="90"
                      height="90"
                  alt={product.title}
                />
              </div>
            </td>
            <td>
                    <span className={styles.name}>{product.title}</span>
            </td>
            <td>
              {/* <span className={styles.extras}>
                    {product.extras.map((extra) => {
                  <span key={extra._id} >{extra.text}</span>
                })}
              </span> */}
            </td>
            <td>
                  <span className={styles.price}>${product.price}</span>
            </td>
            <td>
              <span className={styles.quantity}>{product.quantity}</span>
            </td>
            <td>
                  <span className={styles.total}>${ product.price * product.quantity }</span>
            </td>
                </tr>
              ))}
            </tbody>
        </table>
        </div>


<div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${cart.totalPrice}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${cart.totalPrice}
            </div>

              <div className={styles.paymentMethods}>
              <button className={styles.payButton}
                onClick={() => setOpen(true)}>
                Cash on delivery
              </button>
              <PayPalScriptProvider
              options={{
                "client-id":
                  "AV6mjJxSWoj84VEKuwWNYH19UnGAeIZkz32tQqMnaka5WB3tblyedHdBbHglU0NA0-OpRlgN1Lb0Fo3f",
                components: "buttons",
                currency: "GBP",
                "disable-funding": "credit,card,p24",
              }}
            >
              <ButtonWrapper currency={currency} showSpinner={false} />
            </PayPalScriptProvider>
            </div>

            {open && (
                <div className={styles.container}>
                <div className={styles.wrapper}>
                  <h1 className={styles.title}>You will pay $12 after delivery.</h1>
                  <div className={styles.item}>
                    <label className={styles.label}>Name Surname</label>
                    <input
                      className={styles.input}
                      placeholder="John Doe"
                      type="text"
                      onChange={(e) => setCustomer(e.target.value)}
                    />
                  </div>
                  <div className={styles.item}>
                    <label className={styles.label}>Address</label>
                    <textarea
                      className={styles.input}
                      rows={5}
                      placeholder="Elton St. 505 NY"
                      type="text"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <button onClick={handleClick}>Order</button>
                </div>
              </div>
            )}
              
          </div>
          </div>
    </div>
  );
}

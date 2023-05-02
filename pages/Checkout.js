import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import { reset } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import styles from "../styles/OrderDetail.module.css";
// import { useRouter } from "next/router";

export default function Home() {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [totalPrice, setTotalPrice] = useState(40);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  // const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        console.log(res.data);
        // router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    createOrder({ customer, address, totalPrice, method: 0 });
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={() => setOpen(true)}>open modal</button>

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
  );
}

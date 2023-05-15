import styles from "../../styles/Order.module.css";
import Image from "next/image";
import paid from "../../public/assets/icons_logos/paid.png"
import preparing from "../../public/assets/icons_logos/preparing.png"
import ontheway from "../../public/assets/icons_logos/bike.png"
import delivered from "../../public/assets/icons_logos/delivered.png"
import axios from "axios";

const Order = ({order}) => {
  const status = order.status;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
      <div className={styles.container}>     
          <div className={styles.left}>
              <h1>Your order process</h1>
        <div className={styles.row}>
          <table className={styles.table}>
            <thead>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
              </tr>
            </thead>
            <tbody>
            <tr className={styles.tr}>
              <td>
                  <span className={styles.id}>{ order._id }</span>
              </td>
              <td>
                  <span className={styles.name}>{ order.customer }</span>
              </td>
              <td>
                  <span className={styles.address}>{ order.address }</span>
              </td>
              <td>
                  <span className={styles.total}>${ order.totalPrice }</span>
              </td>
              </tr>
              </tbody>
          </table>
        </div>

        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src={paid} width={30} height={30} alt="paid icon" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              {/* <CheckCircle
                className={styles.checkedIcon}
                width={20}
                              height={20}
                style={{fill: "springgreen"}}
              /> */}
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src={preparing} width={30} height={30} alt="preparing icon" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              {/* <CheckCircle
                className={styles.checkedIcon}
                width={20}
                              height={20}
                              style={{fill: "springgreen"}}
              /> */}
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src={ontheway} width={30} height={30} alt="one the way icon" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              {/* <CheckCircle
                className={styles.checkedIcon}
                width={20}
                              height={20}
                              style={{fill: "springgreen"}}
              /> */}
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src={delivered} width={30} height={30} alt="delivered icon" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              {/* <CheckCircle
                className={styles.checkedIcon}
                width={20}
                height={20}
                style={{fill: "springgreen"}}
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};

export default Order;
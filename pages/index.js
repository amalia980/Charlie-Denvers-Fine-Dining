import * as React from "react";

import styles from "../styles/Home.module.css";
import bookingImg from "../public/assets/Backgrounds/header_background.jpg";
import orderImg from "../public/assets/Backgrounds/danny-lines-ucQny4RWXm0-unsplash.jpg";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Charlie Denvers Fine Dining</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap" rel="stylesheet"/>
      </Head>
      
      <div className={styles.header}>
        <div className={styles.split1}>
          <div className={styles.book_order_containers}>
            <h1>
              Welcome to Charlie Denvers Fine Dining!
            </h1>
            <button
              style={{
                color: "white",
                borderColor: "white",
                borderRadius: " 15px",
                borderRadius: " 50px",
                fontSize: "1vw",
                marginTop: "2rem",
              }}
              className={styles.book_order_btns}
            >
              book a table
            </button>
          </div>
        </div>
        <div className={styles.split2}>
          <Image className={styles.header_images} src={bookingImg} alt="booking image" />
        </div>
      </div>

      <div className={styles.header}>
        <div className={styles.split1}>
          <Image className={styles.header_images} src={orderImg} alt="order image" />
        </div>
        <div className={styles.split2}>
          <div className={styles.book_order_containers}>
            <h4>
              Enjoy our food at your own convenience. Everything on our regular
              menu will be accessible.
            </h4>
            <button
              style={{
                color: "white",
                borderColor: "white",
                borderRadius: " 50px",
                fontSize: "1vw",
                marginTop: "2rem",
              }}
              className={styles.book_order_btns}
            >
              order to home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

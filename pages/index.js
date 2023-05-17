import * as React from "react";

import styles from "../styles/Home.module.css";
import bookingImg from "../public/assets/Backgrounds/header_background.jpg";
import orderImg from "../public/assets/Backgrounds/danny-lines-ucQny4RWXm0-unsplash.jpg";
import Image from "next/image";
import Head from "next/head";
import card1 from "../public/assets/Backgrounds/archit-dharod-0nr6QahMrj8-unsplash.jpg";
import card2 from "../public/assets/Backgrounds/sebastian-coman-photography-nQqNjfOVvrs-unsplash.jpg";
import card3 from "../public/assets/Backgrounds/seth-reese-JZ5WREw9664-unsplash.jpg";
import card4 from "../public/assets/Backgrounds/pablo-merchan-montes-wYOPqmtDD0w-unsplash.jpg";

export default function Home() {

  const card = [
    {
      id: 1,
      title: "Valentine special",
      img: card1
    },
    {
      id: 2,
      title: "Celebration special",
      img: card2
    },
    {
      id: 3,
      title: "Picnic special",
      img: card3
    },
    {
      id: 4,
      title: "Family special",
      img: card4
    }
  ];
  
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Charlie Denvers Fine Dining</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.header}>
        <div className={styles.split1}>
          <div className={styles.book_order_containers}>
            <h1>
              Welcome to Charlie Denver’s fine Dining! Enjoy your dinner at one
              of our fine restaurants
            </h1>
            <button className={styles.book_order_btns}>
              <p>BOOK A TABLE</p>
            </button>
          </div>
        </div>
        <div className={styles.split2}>
          <Image
            className={styles.header_images}
            src={bookingImg}
            alt="booking image"
          />
        </div>
      </div>

      <div className={styles.header}>
        <div className={styles.split1}>
          <Image
            className={styles.header_images}
            src={orderImg}
            alt="order image"
          />
        </div>
        <div className={styles.split2}>
          <div className={styles.book_order_containers}>
            <h1>
              Enjoy our food at your own convenience. Everything on our regular
              menu will be accessible.
            </h1>
            <button className={styles.book_order_btns}>
              <p>ORDER TO HOME</p>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.cardWrapper}>
        <div className={styles.cardUnderlay}>
          <span className={styles.cardTitleSpan}>
            <h1>PACKAGES</h1>
          </span>

          <div className={styles.cardContainer}>
            {card.map((card) => {
              return (
                <div className={styles.cardImage}>
                  <Image className={styles.card} width="350" height="480" src={card.img} key={card.id} />
                  <span className={styles.cardTitleWrapper}><p className={styles.cardTitle}>{ card.title }</p></span>
                </div>
            )})}
          </div>
        </div>
      </div>
    </>
  );
}

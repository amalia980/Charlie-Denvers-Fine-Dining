import * as React from "react";

import styles from "../styles/Home.module.css";
import bookingImg from "../public/assets/Backgrounds/header_background.jpg";
import orderImg from "../public/assets/Backgrounds/danny-lines-ucQny4RWXm0-unsplash.jpg";
import Image from "next/image";
import { Button, Typography, Box } from "@material-ui/core";

export default function Home() {
  return (
    <>
      <Box className={styles.header}>
        <div className={styles.split1}>
          <div className={styles.book_order_containers}>
            <Typography variant="h4">
              Welcome to Charlie Denver's Fine Dining!{" "}
            </Typography>
            <Button
              style={{
                color: "white",
                borderColor: "white",
                borderRadius: " 15px",
                borderRadius: " 50px",
                fontSize: "1vw",
                marginTop: "2rem",
              }}
              variant="outlined"
              className={styles.book_order_btns}
            >
              book a table
            </Button>
          </div>
        </div>
        <div className={styles.split2}>
          <Image className={styles.header_images} src={bookingImg} />
        </div>
      </Box>

      <Box className={styles.header}>
        <div className={styles.split1}>
          <Image className={styles.header_images} src={orderImg} />
        </div>
        <div className={styles.split2}>
          <div className={styles.book_order_containers}>
            <Typography variant="h4" color="inherit">
              Enjoy our food at your own convenience. Everything on our regular
              menu will be accessible.
            </Typography>
            <Button
              style={{
                color: "white",
                borderColor: "white",
                borderRadius: " 50px",
                fontSize: "1vw",
                marginTop: "2rem",
              }}
              variant="outlined"
              className={styles.book_order_btns}
            >
              order to home
            </Button>
          </div>
        </div>
      </Box>
    </>
  );
}

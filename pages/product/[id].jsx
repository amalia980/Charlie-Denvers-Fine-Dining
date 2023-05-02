import {
    Button,
    ButtonGroup,
    Checkbox,
    Container,
    FormControlLabel,
    TextField,
    useTheme,
  } from "@material-ui/core";
  import Image from "next/image";
  import React from "react";
  import styles from "../../styles/Product.module.css";
  import axios from "axios";
  import { useEffect } from "react";
  import { useDispatch } from "react-redux";
  import { addProduct } from "../../redux/cartSlice";
  
  const Product = ({ item }) => {
    const [price, setPrice] = React.useState(item.price[0]);
    const [size, setSize] = React.useState(0);
    const [quantity, setQuantity] = React.useState(1);
    const [ifType, setIfType] = React.useState(false);
    const [extras, setExtras] = React.useState([]);
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (item.type.length > 0) {
        setIfType(true);
      }
      if (item.extraOptions.length > 0) {
        setExtras(true);
      }
    }, []);
  
    const changePrice = (number) => {
      setPrice(price + number);
    };
  
    const handleSize = (sizeIndex) => {
      const difference = item.price[sizeIndex] - item.price[size];
      setSize(sizeIndex);
      changePrice(difference);
    };
  
    const handleChange = (e, option) => {
      const checked = e.target.checked;
  
      if (checked) {
        changePrice(option.price);
        setExtras((prev) => [...prev, option]);
      } else {
        changePrice(-option.price);
        setExtras(extras.filter((extra) => extra._id !== option._id));
      }
    };
  
    const handleAddToCart = () => {
      dispatch(addProduct({...item, extras, price, quantity}));
    };
  
    return (
      <>
        <div className={styles.container}>
          <div className={styles.left}>
            {/* <div className={styles.imgContainer}> */}
              <Image
                className={styles.imgContainer}
                alt={item.title}
              src={item.img}
              width="500"
              height="500"
              />
            {/* </div> */}
          </div>
  
          <div className={styles.right}>
            <h1 className={styles.title}>{item.title}</h1>
            <span className={styles.price}>${price}</span>
            <p className={styles.desc}>{item.description}</p>
            {ifType && (
              <div>
                <h3 className={styles.choose}>Choose how many bites</h3>
                <div className={styles.sizes}>
                  <ButtonGroup>
                    <Button
                      style={{ color: "white" }}
                      onClick={() => handleSize(0)}
                      key={item._id}
                    >
                      {item.type[0]}
                    </Button>
                    <Button
                      style={{ color: "white" }}
                      onClick={() => handleSize(1)}
                      key={item._id}
                    >
                      {item.type[1]}
                    </Button>
                    <Button
                      style={{ color: "white" }}
                      onClick={() => handleSize(2)}
                      key={item._id}
                    >
                      {item.type[2]}
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            )}
  
            {extras && (
              <div className={styles.extras}>
                <h3>Choose additional ingredients</h3>
                {item.extraOptions.map((option) => (
                  <div className={styles.option} key={
                    option._id}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={(e) => handleChange(e, option)}
                          id={option.text}
                          name={option.text}
                          style={{ color: "white" }}
                        />
                      }
                      label={option.text}
                    />
                  </div>
                ))}
              </div>
            )}
            <TextField
              onChange={(e) => setQuantity(e.target.value)}
              className={styles.quantity}
              variant="outlined"
              type="number"
              defaultValue={1}
            ></TextField>
  
            <Button
              style={{ marginLeft: "10px" }}
              className={styles.button}
              variant="contained"
              onClick={handleAddToCart}
            >
              add to cart
              </Button>
          </div>
        </div>
      </>
    );
  };
  
  export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(
      `http://localhost:3000/api/products/${params.id}`
    );
    return {
      props: { item: res.data },
    };
  };
  
  export default Product;
  
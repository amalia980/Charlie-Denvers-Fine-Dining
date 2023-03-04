import { Button, ButtonGroup, Checkbox, Container, FormControlLabel, TextField, useTheme } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Product.module.css"
import axios from "axios"
import { useEffect } from "react";

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}/`);
    return {
        props: { itemApi: res.data } 
    }
}


const Product = ({ itemApi }) => {
    
    const [price, setPrice] = React.useState(itemApi.price[0]);
    const [size, setSize] = React.useState(0);
    const [ifType, setIfType] = React.useState(false);
    const [ifExtraOptions, setIfExtraOptions] = React.useState(false);

    useEffect(() => {
        if (itemApi.type.length === 0) {
            setIfType(true)
        }
        if (itemApi.extraOptions.length === 0) {
            setIfExtraOptions(true)
        }
    }, [])

    const changePrice = (number) => {
        setPrice(price + number);
    }

    const handleSize = (sizeIndex) => {
        const difference = itemApi.price[sizeIndex] - itemApi.price[size]

        setSize(sizeIndex)

        changePrice(difference);
    }

    const handleChange = (e, option) => {
        const checked = e.target.checked;

        if (checked) {
            changePrice(option.price)
        } else {
            changePrice(-option.price)
        }
    }

    const addProducts = (product) => {
        const exist = cart.find((x) => x.id === product.id)
    
        if (exist) {
          setCart(
            cart.map((x) =>
              x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x,
            ),
          )
        } else if (product.quantity === 0) {
        } else {
          setCart([...cart, { ...product, quantity: 1 }])
        }
        console.log("added: " + product)
      }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.imgContainer}>
                    <Image src={itemApi.img} width="200" height="200" layout="fill" objectFit="cover" />
                    </div>
                </div>
                
                <div className={styles.right}>
                    <h1 className={styles.title}>{itemApi.title}</h1>
                    <span className={styles.price}>${price}</span>
                    <p className={styles.desc}>{itemApi.description}</p>
                    {ifType && ( 
                        <div>
                    <h3 className={styles.choose}>Choose how many bites</h3>
                        <div className={styles.sizes}>
                            <ButtonGroup>
                            {itemApi.type.map(i => (
                                <Button style={{ color: "white" }} onClick={() => handleSize(0)} key={i._id}>{ i.text}</Button>
                            ))}
                            </ButtonGroup>
                            </div>
                            </div>
                    )}

                    {ifExtraOptions && (
                        <div className={styles.extras}>
                        <h3>Choose additional ingredients</h3>
                        {itemApi.extraOptions.map(i => (
                            <div className={styles.option} key={i._id}>
                                <FormControlLabel
                                    control={<Checkbox
                                        onChange={(e, option) => handleChange(e, option)} id={i.text} name={i.text} style={{ color: "white" }} />} label={i.text} />
                        </div>
                        ))}
                        </div>
                    )}
                    <TextField className={styles.quantity} variant="outlined" type="number" defaultValue={1}></TextField>
                    
                        <Button style={{marginLeft: "10px"}} className={styles.button} variant="contained" >add to cart</Button>
                </div>
                {/* <div className={styles.right}>
                    <h1 className={styles.title}>{ itemApi.title }</h1>
                    <span className={styles.price}>${price}</span>
                    <p className={styles.desc}>{itemApi.description}</p>
                    <h3 className={styles.choose}>Choose how many bites</h3>
                    <div className={styles.sizes} >
                        <ButtonGroup >
                            {itemApi.extraOptions.map(i => (
                                <Button style={{ color: "white" }} onClick={() => handleSize(0)} key={i._id}>{ i.text}</Button>
                            ))}
                        </ButtonGroup>
                    </div>

                    <div className={styles.extras}>
                        <h3>Choose additional ingredients</h3>
                        {itemApi.extraOptions.map(i => (
                            <div className={styles.option} key={i._id}>
                                <FormControlLabel
                                    
                                control={<Checkbox onChange={(e, option) => handleChange(e, option)} id={i.text} name={i.text} style={{color: "white"}} />} label={i.text} />
                        </div>
                        ))}
                    </div>
                    <TextField className={styles.quantity} variant="outlined" type="number" defaultValue={1}></TextField>
                    
                        <Button style={{marginLeft: "10px"}} className={styles.button} variant="contained" >add to cart</Button>
                </div> 
                */}
            </div>
        </>
    )
}

export default Product;
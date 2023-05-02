import React from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';
import styles from '../styles/Menu.module.css';
import ProductCard from '../components/ProductCard';

export const getServerSideProps = async () => {

  const res = await axios.get('http://localhost:3000/api/products')
  return {
    props: { itemsApi: res.data },
  }
}

const Menu = ({ itemsApi }) => {
  const sushi = itemsApi.filter((obj) => {
    return obj.category === 'sushi'
  })

  const fish = itemsApi.filter((obj) => {
    return obj.category === 'fish'
  })

  const meat = itemsApi.filter((obj) => {
    return obj.category === 'meat'
  })

  const pasta = itemsApi.filter((obj) => {
    return obj.category === 'pasta'
  })

  const vegetarian = itemsApi.filter((obj) => {
    return obj.category === 'vegetarian'
  })

  const dessert = itemsApi.filter((obj) => {
    return obj.category === 'dessert'
  })

  return (
    <div className={styles.wrapper}>
      <Container>
        <h1>Sushi</h1>
        <div className={styles.menu_container}>
          {sushi.map((item) => (
              <ProductCard item={item} key={item._id} />
          ))}
        </div>

        <h1>Fish</h1>
        <div className={styles.menu_container}>
          {fish.map((item) => (
              <ProductCard item={item} key={item._id} />
          ))}
        </div>

        <h1>Meat</h1>
        <div className={styles.menu_container}>
          {meat.map((item) => (
              <ProductCard item={item} key={item._id} />
          ))}
        </div>

        <h1>Pasta</h1>
        <div className={styles.menu_container}>
          {pasta.map((item) => (
              <ProductCard item={item} key={item._id} />
          ))}
        </div>

        <h1>Vegetarian</h1>
        <div className={styles.menu_container}>
          {vegetarian.map((item) => (
              <ProductCard item={item} key={item._id} />
          ))}
        </div>

        <h1>Dessert</h1>
        <div className={styles.menu_container}>
          {dessert.map((item) => (
              <ProductCard item={item} key={item._id} />
          ))}
        </div>
      </Container>
    </div>
  )
};

export default Menu;
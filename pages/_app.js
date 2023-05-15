import * as React from 'react';
import "../styles/globals.css";
import CartProvider from '../context/CartContext';
import Layout from "../components/Layout";
import store from "../redux/store";
import { Provider } from "react-redux";

export default function MyApp({Component, pageProps}) {
  
  return (
    <Provider store={store}>
      <CartProvider>
      <Layout>
        <Component {...pageProps} />
        </Layout>
        </CartProvider>
    </Provider>
  );
}

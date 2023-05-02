import * as React from 'react';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import CartProvider from '../context/CartContext';
import Layout from "../components/Layout";
import store from "../redux/store";
import { Provider } from "react-redux";

export default function MyApp({Component, pageProps}) {
  
  return (
    <Provider store={store}>
      <CartProvider>
      <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title>Charlie Denver's Fine Dining</title>
        </Head>
        <CssBaseline />
      <Layout>
        <Component {...pageProps} />
        </Layout>
        </CartProvider>
    </Provider>
  );
}

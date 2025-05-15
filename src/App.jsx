import React from 'react';
import { Routes, Route } from 'react-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faB } from '@fortawesome/free-solid-svg-icons';
import Layout from './layout/Layout';
import { Slide, ToastContainer } from 'react-toastify';
import ScrollToTop from './hooks/useScrollToTop';
import {
  Home,
  ProductId,
  Products,
  Checkout,
  CheckoutSuccess,
  Contact,
  NotFound,
} from './pages/index';

function App() {
  return (
    <>
      <ScrollToTop />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnHover
        theme="auto"
        closeButton={true}
        transition={Slide}
        className="transition-all duration-150 ease-in-out"
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductId />} />
          <Route path="contact" element={<Contact />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout-success" element={<CheckoutSuccess />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

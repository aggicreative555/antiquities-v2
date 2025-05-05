import React from 'react';
import { Routes, Route} from 'react-router';
import Layout from './layout/Layout';
import {Home, ProductId, Products, Checkout, CheckoutSuccess, Contact, NotFound} from './pages/index'; 

function App() {
  return (
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
  );
}

export default App;

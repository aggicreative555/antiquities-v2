import React, { useCallback, useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/search/SearchBar';
import { useProductStore } from '../stores/productStore';

function Products() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const fetchProducts = useProductStore((state) => state.fetchProducts);
  const products = useProductStore((state) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [products.length, fetchProducts]);

  const handleResults = useCallback((results) => {
    setFilteredProducts(results);
  }, []);

  return (
    <main className="container mx-auto px-8">
      <SearchBar onResults={handleResults}></SearchBar>
      <ProductList
        products={filteredProducts.length ? filteredProducts : products}
      />
    </main>
  );
}

export default Products;

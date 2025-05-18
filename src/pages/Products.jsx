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
      <h1 className="text-4xl md:text-6xl text-red-800 font-garamond text-center w-full cursor-default uppercase mb-20 mt-10">
        All products
      </h1>
      <SearchBar onResults={handleResults} />
      <ProductList
        products={filteredProducts.length ? filteredProducts : products}
      />
    </main>
  );
}

export default Products;

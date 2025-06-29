import React, { useState, useCallback, useEffect } from 'react';
import ProductList from '../components/ProductList';
import Carousel from '../components/carousel/Carousel';
import swanBoat from '../assets/images/swan-boat.jpg';
import whiteSwans from '../assets/images/white-swans.jpg';
import paintingSwan from '../assets/images/painting-swan.jpg';
import SearchBar from '../components/search/SearchBar';
import { useProductStore } from '../stores/productStore';

const Home = () => {
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

  const images = [
    {
      src: swanBoat,
      alt: 'A boat shaped like a swan in water',
      text: 'Sun, waves, swans.',
      content:
        'Surrender to the warmth and serenity of the summer season waves. Let go with us...',
    },
    {
      src: whiteSwans,
      alt: 'A white swan in water behind bushes',
      text: 'Let the waves take you',
      content:
        'The current here is warm. Explore our vast selection of premium products. ',
    },
    {
      src: paintingSwan,
      alt: 'Classical painting of a clothingless woman and a swan',
      text: 'Do not fret.',
      content:
        'We have a great return policy on all our items. Visit our contact page to file a return. ',
    },
  ];

  return (
    <>
      <banner className="md:-translate-y-14 mb-5 md:h-[500px] overflow-hidden">
        <Carousel images={images} />
      </banner>
      <main className="container mx-auto px-8">
        <h1 className="text-4xl md:text-6xl text-red-800 font-garamond text-center w-full cursor-default uppercase mb-10 ">
          Discover our selection
        </h1>
        <SearchBar onResults={handleResults} />
        <ProductList
          products={filteredProducts.length ? filteredProducts : products}
        />
      </main>
    </>
  );
};

export default Home;

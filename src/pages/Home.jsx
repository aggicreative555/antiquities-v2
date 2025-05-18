import React from 'react';
import ProductList from '../components/ProductList';
import Carousel from '../components/carousel/Carousel';
import swanBoat from '../assets/images/swan-boat.jpg';
import whiteSwans from '../assets/images/white-swans.jpg';
import paintingSwan from '../assets/images/painting-swan.jpg';
import SearchBar from '../components/search/SearchBar';

const Home = () => {
  const images = [
    {
      src: swanBoat,
      text: 'Sun, waves, swans.',
      content:
        'Surrender to the warmth and serenity of the summer season waves. Let go with us...',
    },
    {
      src: whiteSwans,
      text: 'Let the waves take you',
      content:
        'The current here is warm. Explore our vast selection of premium products. ',
    },
    {
      src: paintingSwan,
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
        <SearchBar />
        <ProductList />
      </main>
    </>
  );
};

export default Home;

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NotFound } from '../pages';
import { useProductStore } from '../stores/productStore';
import { getDiscountInfo } from '../utils/getDicountInfo';
import useCartStore from '../stores/cartStore';
import StarRating from './rating/StarRating';
import Stars from './rating/Stars';

function SingleProduct() {
  const { id } = useParams();
  const { products, isLoading, isError, fetchProducts } = useProductStore();
  const { addToCart } = useCartStore();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [fetchProducts, products.length]);

  const product = products.find((product) => product.id === id);

  if (isLoading) return <p>Loading Content...</p>;
  if (isError) return <p>Error loading products, please refresh the page...</p>;
  if (!product) return <NotFound />;

  console.log(product);


  const { price, discountedPrice, tags } = product;
  const discount = getDiscountInfo(price, discountedPrice);
  return (
    <>
      <div className="flex flex-col lg:flex-row transition-all duration-500 ease-in-out">
        <div className="w-full h-auto group overflow-hidden max-h-80 flex md:max-h-96  justify-center items-center ">
          <img
            src={product.image.url}
            alt={product.image.alt}
            className="transition-transform duration-300 ease-in-out object-cover aspect-auto group-hover:scale-110 w-full"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-10 container mx-auto px-8 lg:px-8 py-4 justify-center items-center relative">
          <p className='absolute -top-10 lg:-top-2 right-2 bg-red-900 flex items-center justify-center w-fit aspect-square p-1 text-white font-button rounded-full hover:scale-110 hover:rotate-12 hover:translate-y-2 duration-300 cursor-default transition-transform'>- {discount.percentage}%</p>
          <div className="flex flex-col gap-1 h-ful items-center justify-center lg:justify-between lg:gap-4">
            <h1 className="text-3xl md:text-5xl text-center font-garamond uppercase tracking-tighter text-red-800 transition-all duration-300 ease-in-out">{product.title}</h1>
            <p className="text-[.5rem] text-gray-400 font-caslon tracking-wide italic">
                {tags.map((tag) => `#${tag}`).join(', ')}
            </p>
            <p className="text-center text-xs font-caslon text-black mt-4 lg:px-20 ">{product.description}
            </p>
            <div className="flex py-5">
              {discount ? (
                <>
                  <div className="flex w-full items-center justify-end gap-2">
                    <p className="text-3xl font-button text-black flex flex-wrap items-center md:items-baseline gap-1">
                      {discountedPrice}
                      <span className='text-xs'>NOK</span>
                    </p>
                    <div className="flex flex-col justify-between">
                      <p className="line-through text-xs font-button border-b-2 border-black-400 text-gray-500">{price} NOK</p>
                      <p className="text-[.5rem] font-button italic text-red-800">
                        You save {discount.savings} NOK
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-lg font-button text-black">{price}
                  <span className='text-xs'>NOK</span>
                </p>
              )}
            </div>
              <button
                className="btn-l btn-primary w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
              >
                Add to Cart
              </button>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col text-lg items-center gap-2 lg:w-full border-[1px] pb-10 border-gray-200 cursor-default container mx-auto">
        <h3 className='text-2xl md:text-3xl lg:text-4xl text-center font-garamond uppercase tracking-tighter text-red-800 border-b-2 border-gray-200 pb-2 mb-5 mt-5 transition-all duration-300 ease-in-out'>Your thoughts & opinions</h3>
        <StarRating/>
        <div>
          {product.reviews?.length > 0 ? (
            <ul className='flex flex-col gap-4'>
              {product.reviews.map((review, index) => (
                <li key={index} className=' font-caslon flex flex-col gap-2 border-b-[1px] border-gray-200 p-2 mt-10'>
                  <Stars rating={review.rating} size='sm'/>
                  <p className='font-button text-sm'>{review.username}</p>
                  <p className='mb-5'>{review.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className='text-sm font-button uppercase'>No rviews yet</p>
          )}
        </div>
      </div>
    </>
  );
}

export default SingleProduct;

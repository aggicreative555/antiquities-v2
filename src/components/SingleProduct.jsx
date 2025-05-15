import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NotFound } from '../pages';
import { useProductStore } from '../stores/productStore';
import { getDiscountInfo } from '../utils/getDicountInfo';
import useCartStore from '../stores/cartStore';
import StarRating from './rating/StarRating';

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


  const { price, discountedPrice, tags } = product;
  const discount = getDiscountInfo(price, discountedPrice);
  return (
    <div className="flex flex-col md:flex-row gap-10 container mx-auto px-8 py-4">
      <div className="">
        <img
          src={product.image.url}
          alt={product.image.alt}
          className="w-full max-w-lg"
        />
      </div>
      <div className="flex flex-col gap-4 h-full">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <div className="mt-2 flex flex-row text-lg items-center gap-2">
          <StarRating/>
        </div>
        <p className="mt-2 text-lg">{product.description}</p>
        {discount ? (
          <>
            <p className="text-lg font-bold text-red-700">
              {discountedPrice} NOK
            </p>
            <p className="line-through text-gray-500">{price} NOK</p>
            <p className="text-sm text-green-600">
              You save {discount.savings} NOK ({discount.percentage}%)
            </p>
          </>
        ) : (
          <p className="text-lg font-bold">{price} NOK</p>
        )}
        <div className="px-6 pb-4 h-full flex flex-col justify-end">
          <button
            className="p-4 my-4 bg-amber-950 hover:bg-amber-800 text-white rounded"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
          >
            Add to Cart
          </button>
          <p className="text-sm text-gray-500">
            {tags.map((tag) => `#${tag}`).join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;

import React, { useEffect } from 'react';
import { useProductStore } from '../stores/productStore';
import { getDiscountInfo } from '../utils/getDicountInfo';
import { Link } from 'react-router-dom';
import useCartStore from '../stores/cartStore';
import Pagination from './Pagination';
import { useSearchParams } from 'react-router-dom';

function ProductList({ products: propProducts, itemsPerPage = 6 }) {
  const {
    products: storeProducts,
    isLoading,
    isError,
    fetchProducts,
  } = useProductStore();
  const { addToCart } = useCartStore();

  const products = propProducts?.length ? propProducts : storeProducts;
  const [searchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get('page')) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    if (!propProducts?.length && storeProducts.length === 0) {
      fetchProducts();
    }
  }, [propProducts, storeProducts.length, fetchProducts]);

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  if (isLoading) return <p>Loading Content...</p>;
  if (isError) return <p>Error loading products, please refresh the page...</p>;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative place-items-center w-full transition-all ease-in-out duration-300">
        {currentProducts.map((product) => {
          const { title, price, discountedPrice, tags, image } = product;
          const discount = getDiscountInfo(price, discountedPrice);

          return (
            <div
              className="h-[600px] w-60 md:w-80 shadow-md flex flex-col justify-between transition-all ease-in-out duration-300 hover:shadow-xl group"
              key={product.id}
            >
              <Link to={`/products/${product.id}`} className='cursor-pointer'>
                <div className="h-64 w-fit overflow-clip">
                  <img
                    className="transition-transform duration-300 ease-in-out object-cover min-h-64 aspect-auto group-hover:scale-110"
                    src={image.url}
                    alt={image.alt}
                  />
                </div>
                <div className="px-6 py-4 flex justify-between items-center flex-col relative">
                  <h2 className="text-xl text-center font-garamond uppercase text-red-800 mb-8">{title}</h2>
                  {discount ? (
                    <>
                    <p className='absolute -top-10 -right-2 bg-red-900 flex items-center justify-center w-fit aspect-square p-1 text-white font-button rounded-full hover:scale-110 hover:rotate-12 hover:translate-y-2 duration-300 transition-transform cursor-default'>- {discount.percentage}%</p>
                      <p className="text-lg font-button text-black">
                        {discountedPrice} NOK
                      </p>
                      <span className='h-[.5px] w-[50px] bg-black mb-1'></span>
                      <p className="line-through text-xs font-button text-gray-500">{price} NOK</p>
                      <p className="text-[.5rem] font-button italic text-black">
                        You save {discount.savings} NOK
                      </p>
                    </>
                  ) : (
                    <p className="text-lg font-button text-black">{price} NOK</p>
                  )}
                <p className='text-center text-xs font-caslon text-black line-clamp-2 mt-4'>
                  {product.description}

                </p>
                </div>
              </Link>
              <div className="px-6 pb-4 h-full flex flex-col justify-center">
                <button
                  className="flex justify-center items-center btn-l mb-5"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                >
                  Add to Cart
                </button>
                <p className="text-xs text-gray-400 font-caslon">
                  {tags.map((tag) => `#${tag}`).join(', ')}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className='w-full flex items-center justify-center mt-6 mb-12 md:mt-10 md:mb-18'>
        <Pagination totalItems={products.length} itemsPerPage={itemsPerPage}/>
      </div>
    </>
  );
}

export default ProductList;

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
              className="h-[550px] w-60 md:w-80 shadow-xl border flex flex-col gap-4 rounded transition-all ease-in-out duration-300"
              key={product.id}
            >
              <Link to={`/products/${product.id}`}>
                <img
                  className="object-cover w-full h-64 rounded-t"
                  src={image.url}
                  alt={image.alt}
                />
                <div className="px-6 py-4">
                  <h2 className="text-lg font-semibold">{title}</h2>
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
                </div>
              </Link>
              <div className="px-6 pb-4 h-full flex flex-col justify-end">
                <button
                  className="btn-l"
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
          );
        })}
      </div>
      <Pagination totalItems={products.length} itemsPerPage={itemsPerPage}/>
    </>
  );
}

export default ProductList;

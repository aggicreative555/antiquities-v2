import React from 'react';
import { useEffect } from 'react';
import { useProductStore } from '../stores/productStore';
import { getDiscountInfo } from '../utils/getDicountInfo';
import { Link } from 'react-router-dom';

function ProductList() {
  const { products, isLoading, isError, fetchProducts } = useProductStore();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [fetchProducts, products.length]);

  if (isLoading) return <p>Loading Content...</p>;
  if (isError) return <p>Error loading products, please refresh the page...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => {
        const { title, price, discountedPrice, tags, image } = product;
        const discount = getDiscountInfo(price, discountedPrice);

        return (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div className="h-auto max-w-96 shadow-xl border flex flex-col gap-4 rounded">
              <img
                className="object-cover w-full h-64 rounded-t"
                src={image.url}
                alt={image.alt}
              />
              <div className="p-6">
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
                <p className="text-sm text-gray-500">
                  {tags.map((tag) => `#${tag}`).join(', ')}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductList;

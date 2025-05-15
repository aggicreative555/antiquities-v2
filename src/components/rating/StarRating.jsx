import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useProductStore } from '../../stores/productStore';
import { useParams } from 'react-router-dom';
import Stars from './Stars';

function StarRating() {
  const { products, fetchProducts } = useProductStore();
  const { id } = useParams();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [fetchProducts, products.length]);

  const product = products.find((product) => product.id === id);
  const currentRate = product?.rating ?? 0;
  const reviewRate = product?.reviews.length ?? 0;

  return (
    <div value={currentRate} className="flex flex-row gap-4 items-start">
      <div className="flex gap-2 items-end">
        <span className="text-4xl font-button text-bold">{currentRate}</span>
        <span className="text-gray-400 font-button">/ 5</span>
      </div>
      <div className="flex flex-col gap-3">
        <Stars rating={currentRate} size="lg" />
        <div className="text-gray-400 uppercase font-button text-sm">
          {reviewRate} {reviewRate === 1 ? 'review' : 'reviews'}
        </div>
      </div>
    </div>
  );
}

export default StarRating;

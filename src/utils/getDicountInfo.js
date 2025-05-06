export function getDiscountInfo(price, discountedPrice) {
  if (discountedPrice >= price) {
    return null;
  }

  const savings = price - discountedPrice;
  const percentage = Math.round((savings / price) * 100);

  return {
    savings,
    percentage,
  };
}

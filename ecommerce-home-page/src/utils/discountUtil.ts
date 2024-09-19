export const calculateDiscountPercentage = (originalPrice: number, discountedPrice: number): number => {
    if (originalPrice <= 0) {
      throw new Error('Original price must be greater than zero');
    }
  
    if (discountedPrice < 0) {
      throw new Error('Discounted price cannot be negative');
    }

    const result =   Math.abs(originalPrice - discountedPrice) / originalPrice * 100;

    return result;
  };
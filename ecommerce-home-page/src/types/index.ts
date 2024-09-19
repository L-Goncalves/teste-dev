export interface ProductItem {
    sku: string | number;
    name: string;
    image: string;
    priceSpecification: {
      price: number;
      oldPrice?: number;
      discount?: number;
    };
}

export interface CartItem {
    sku: string | number;
    name: string;
    price: number;
    quantity: number;
  }
  
import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductCards.scss";
import { getProducts } from "../../api/api";
import { ProductItem } from "../../types";

export const ProductCards = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);


  // NOTE: It's an empty away because I only want to fetch once and there's no condition for me to want to change that.
  useEffect(() => {
    const fetchProducts = async () => {
      const result = await getProducts();
      if(result){
        setProducts(result);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-container">
      {products.map((product) => {
        return <ProductCard key={product.sku} product={product} />;
      })}
    </div>
  );
};

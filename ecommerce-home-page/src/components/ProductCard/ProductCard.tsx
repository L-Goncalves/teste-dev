import "./ProductCard.scss";
import { Button } from "../Button/Button";
import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";
import CartIcon from "../../assets/cart.svg";
import { calculateDiscountPercentage } from "../../utils/discountUtil";

interface ProductItem {
  sku: string | number;
  name: string;
  image: string;
  priceSpecification: {
    price: number;
    oldPrice?: number;
    discount?: number;
  };
}

interface IProps {
  product: ProductItem;
}

export const ProductCard = (props: IProps) => {
  const { product } = props;
  const { addItem, isInCart, removeFromCart } = useCart();
  const [alreadyInCart, setAlreadyInCart] = useState<boolean>(false);
  const inCartContext = isInCart(product.sku);
  const percentageDiscount = product.priceSpecification.oldPrice
    ? calculateDiscountPercentage(
        product.priceSpecification.oldPrice,
        product.priceSpecification.price
      )
    : 0;

  const handleCartChange = () => {
    const item = {
      sku: product.sku,
      name: product.name,
      price: product.priceSpecification.price,
      quantity: 1,
    };

    if (!isInCart(product.sku)) {
      addItem(item);
    } else {
      removeFromCart(item);
    }
  };

  useEffect(() => {
    const verification = isInCart(product.sku);

    setAlreadyInCart(verification);
  }, [inCartContext, alreadyInCart, isInCart, product.sku]);

  return (
    <div className="card" data-testid='card'>
      <img id="product-image" src={product.image} />
      <div className="old-price">
      {product.priceSpecification.oldPrice && (<>From: <p>${product.priceSpecification.oldPrice?.toPrecision(4)}</p></>)}
      </div>
      <div className="price">
        ${product.priceSpecification.price.toFixed(2)}
      </div>
    
      {percentageDiscount != 0 && <div className="discount-percentage">
         {Math.round(percentageDiscount)}% OFF
      </div>}

      <div className="title"> {product.name}</div>
      <Button onClick={handleCartChange} color={"black"}>
        {" "}
        {alreadyInCart ? (
          <>
            <div className="icon">
              <img src={CartIcon} alt="Cart Icon" />
            </div>
            <div className="btn-title">
              <p>REMOVE ITEM FROM CART</p>
            </div>
          </>
        ) : (
          <>
            <div className="icon">
              <img src={CartIcon} alt="Cart Icon" />
            </div>
            <div className="btn-title">
              <p>ADD ITEM TO CART</p>
            </div>
          </>
        )}
      </Button>
    </div>
  );
};

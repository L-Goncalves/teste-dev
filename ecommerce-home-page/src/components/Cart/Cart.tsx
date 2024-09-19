import "./Cart.scss";
import { useCart } from "../../context/CartContext";
import CartIcon from "../../assets/cart.svg";
import { useState } from "react";
import { CartItem } from "../../types";

export const Cart = () => {
  const { itemCount, total, items, removeFromCart} = useCart();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const removeItem = (item: CartItem) => {

    removeFromCart(item);
  }


  return (
    <>
      <div className="cart-container" data-testid="cart-container" onClick={() => setIsOpen(!isOpen)}>
        <div className="cart-icon">
          <img color="#FFF" width="40" src={CartIcon} alt="Cart Icon" />
        </div>
        <p>
          CART: {itemCount} ITEM(S) - ${total.toFixed(2)}
        </p>
      </div>
      <div className="cart-dropdown" data-testid="cart-dropdown">
        {isOpen && (
          <ul>
            {items.length == 0 && (
              <div>
                <li className="cart-item">
                  <p>There's no items added into the Cart.</p>
                </li>
              </div>
            )}
            {/* MAX OF 5 FIRST ITEMS ON CART */}
            {items.slice(0, 5).map((item, index) => {
              return (
                <div key={`cart-item-${index}`}>
                  <li key={`cart-item-title-${index}`} className="cart-item">
                    <div className="cart-item-title">
                      {item.name.slice(0, 50)}...
                    </div>
                    <div key={`cart-item-price-${index}`}>${item.price.toFixed(2)}</div>
                    <div key={`cart-item-remove-btn-${index}`} className='remove'onClick={() => removeItem(item)}>X</div>
                  </li>
                </div>
              );
            })}
            {items.length > 0 && (
              <>
              <div className="cart-item checkout">
                  { "CHECKOUT"}
                </div>
              <div className="cart-see-more">
                {items.length > 5 && "See more.."}
              </div>
                
                </>
            )}
          </ul>
        )}
      </div>
    </>
  );
};

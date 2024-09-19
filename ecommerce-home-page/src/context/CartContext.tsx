/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem } from '../types';




interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  total: number;
  itemCount: number;
  isInCart: (sku: string | number) => boolean;
  removeFromCart: (item: CartItem) => void;
}


const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    if(!items.includes(item)){
        setItems([...items, item])
    }
  };

  const isInCart = (sku: string | number) => {
    return items.some(item => item.sku === sku);
  };

  const removeFromCart = (receivedItem: CartItem) => {
    const filterdItems = items.filter((item) => item.sku != receivedItem.sku)
    setItems(filterdItems);
  }


  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, total, itemCount, isInCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};


export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

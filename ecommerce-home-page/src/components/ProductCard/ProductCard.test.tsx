import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductCard } from "./ProductCard";
import { CartProvider, useCart } from "../../context/CartContext";
import data from "../../assets/api.json";
import React from "react";
import { ProductItem } from "../../types";
jest.mock("./ProductCard.scss", () => ({}));


const TestComponent = ({ product }: { product: ProductItem }) => {
    const {addItem} = useCart()
    
  
    React.useEffect(() => {
        const cartItem = {
            sku: data[0].sku,
            name: data[0].name,
            price: data[0].priceSpecification.price,
            quantity: 1,
          };

          
        return addItem(cartItem);
    }, );
  
    return <ProductCard product={product} />;
  };

describe("ProductCard Component", () => {
  test("Renders Product Card with product prop", () => {
    render(
      <CartProvider>
        <ProductCard product={data[0]} />
      </CartProvider>
    );
    const ProductCardEl = screen.getByTestId("card");
    expect(ProductCardEl).toBeInTheDocument();
  });

  test("Checks price content", () => {
    render(
      <CartProvider>
        <ProductCard product={data[0]} />
      </CartProvider>
    );
    const ProductCardEl = screen.getByTestId("card");

    const price = ProductCardEl.querySelector(".price");

    expect(price).toHaveTextContent(`$${data[0].priceSpecification.price}`);
  });

  test("Checks if text label changes when clicking add to cart", () => {
    render(
      <CartProvider>
        <ProductCard product={data[0]} />
      </CartProvider>
    );
    const ProductCardEl = screen.getByTestId("card");

    const btn = ProductCardEl.querySelector(".btn");

    if(btn) fireEvent(btn,  new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }));
    
    expect(btn).toHaveTextContent('REMOVE ITEM FROM CART');
  });

  test("Checks if text label is remove from cart without clicking", () => {

    render(
      <CartProvider>
        <TestComponent product={data[0]} />
      </CartProvider>
    );
    const ProductCardEl = screen.getByTestId("card");

    const btn = ProductCardEl.querySelector(".btn");
    
    expect(btn).toHaveTextContent('REMOVE ITEM FROM CART');
  });

  
});

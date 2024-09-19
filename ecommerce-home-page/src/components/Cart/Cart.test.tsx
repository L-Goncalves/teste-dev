
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CartProvider, useCart } from "../../context/CartContext";
import { Cart } from './Cart';
import React from 'react';
import data from "../../assets/api.json";

jest.mock('./Cart.scss', () => ({})); 


const TestComponent = () => {
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
  
    return <Cart/>;
  };

describe('Cart Component', () => {
  test('Renders Cart component', () => {
    render(<CartProvider><Cart/></CartProvider>);

    const cart = screen.getByTestId('cart-container');

    expect(cart).toBeInTheDocument();
  });

  test('Expect Error: No Provider', () => {
    const renderWithError = () => {
        try {
          render(<Cart />);
        } catch (error) {
          return error;
        }
      };

    const error = renderWithError();

    expect(error).toBeInstanceOf(Error);
  });


  test('Clicks Cart and Renders Dropdown List', () => {
    render(<CartProvider><Cart/></CartProvider>);

    const cart = screen.getByTestId('cart-container');
    const dropdown = screen.getByTestId('cart-dropdown');


    fireEvent(cart,  new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }));

    expect(dropdown).not.toBeEmptyDOMElement();
  })


  test('Clicks Cart and Checks for Item Inside it', () => {
    render(<CartProvider><TestComponent/></CartProvider>);

    const cart = screen.getByTestId('cart-container');
    const dropdown = screen.getByTestId('cart-dropdown');


    fireEvent(cart,  new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
    }));

    const li = dropdown.querySelector('li');
    const cartItemTitle = dropdown.querySelector('.cart-item-title')
    const word = data[0].name.split(' ')[0]

    expect(dropdown).not.toBeEmptyDOMElement();
    expect(li).toBeInTheDocument();
    expect(cartItemTitle).toBeInTheDocument();
    expect(cartItemTitle ).toHaveTextContent(word)
  })

  
  
});

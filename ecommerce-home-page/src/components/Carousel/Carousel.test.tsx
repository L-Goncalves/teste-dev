
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Carousel } from './Carousel';

jest.mock('./Carousel.scss', () => ({})); 


describe('Carousel Component', () => {
  test('Checks for inner indicator in component', () => {
    render(<Carousel/>);
    const carouselEl = screen.getByTestId('carousel-container');

    const indicator = carouselEl.querySelector('.indicator');

    expect(indicator).toBeInTheDocument()
  });

  test('Checks for image container indicator in component', () => {
    render(<Carousel/>);
    const carouselEl = screen.getByTestId('carousel-container');

    const imgContainer = carouselEl.querySelector('.carousel-image-indicator-container');

    expect(imgContainer).toBeInTheDocument()
  });

  test('Checks if bar exists', () => {
    render(<Carousel/>);
    const carouselEl = screen.getByTestId('carousel-container');

    const bar = carouselEl.querySelector('.bar');

    expect(bar).toBeInTheDocument();
  });

  test('Checks for bar text', () => {
    render(<Carousel/>);
    const carouselEl = screen.getByTestId('carousel-container');

    const bar = carouselEl.querySelector('.bar');

    expect(bar).toHaveTextContent('Check out the most sold categories of the Week!')
  });

  test('Checks for Images', () => {
    render(<Carousel/>);
    const carouselEl = screen.getByTestId('carousel-container');

    const imgs = carouselEl.querySelectorAll('img').length;
    
    expect(imgs).toBeGreaterThan(0)
  });

});

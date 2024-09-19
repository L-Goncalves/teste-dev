
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

jest.mock('./Button.scss', () => ({})); 


describe('Button Component', () => {
  test('renders with correct text', () => {
    render(<Button color="blue" onClick={() => {}}>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('applies the correct color attribute', () => {
    render(<Button color="blue" onClick={() => {}}>Click Me</Button>);
    const button = screen.getByText('Click Me');
    expect(button).toHaveAttribute('color', 'blue');
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button color="blue" onClick={handleClick}>Click Me</Button>);
    
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies the correct CSS class', () => {
    render(<Button color="blue" onClick={() => {}}>Click Me</Button>);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('btn');
  });
});

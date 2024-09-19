
import { Cart } from '../Cart/Cart';
import './Navbar.scss'
export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
            <h2>STORE</h2>
        </div>
        <div>
          <Cart/>
        </div>
      </nav>
    </>
  );
};

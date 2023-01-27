import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaShoppingCart} from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi"
import { IoMdContact } from "react-icons/io"
import "../css/NavBar.css";

export function NavBar() {
  return (
    <>
      <header>
        <nav className="navbar">
            <NavLink to="/" className="logo-container">
            <img
              src="images\restaurant-logo.png"
              alt="restaurant-logo"
            ></img>
            <h2>Guadalupe´s Restaurant</h2>
            </NavLink>
          <div className="navbar-buttons">
            <ul>
              <NavLink to="/menu" className="navbar-buttons--">
                <BiFoodMenu/>
                <span>Menu</span>
              </NavLink>
              <NavLink to="/shopping-cart" className="navbar-buttons--">
                <FaShoppingCart/>
                <span>Shopping Cart</span>
              </NavLink>
              <HashLink to={"/home#address"} className="navbar-buttons--">
                <IoMdContact/>
                <span>Contact</span>
              </HashLink>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaShoppingCart } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import "../css/NavBar.css";
import { useState } from "react";


export function NavBar() {
  const [shwowNavBarButtons, setShowNavBarButtons] = useState(false);
  return (
    <>
      <header>
        <nav className="navbar">
          <NavLink to="/" className="logo-container">
            <img src="images\restaurant-logo.png" alt="restaurant-logo"></img>
            <h2>Guadalupe´s Restaurant</h2>
          </NavLink>
          <div className="navbar-buttons">
          <button className="menu-button-navbar" onClick={()=> setShowNavBarButtons(!shwowNavBarButtons)}>
                <MdMenu />
              </button>
              {shwowNavBarButtons ? (
                <ul className="links-mobile">
                  <NavLink to="/menu" className="navbar-buttons--">
                    <BiFoodMenu />
                    <span>Menu</span>
                  </NavLink>
                  <NavLink to="/shopping-cart" className="navbar-buttons--">
                    <FaShoppingCart />
                    <span>Shopping Cart</span>
                  </NavLink>
                  <HashLink to={"/home#address"} className="navbar-buttons--">
                    <IoMdContact />
                    <span>Contact</span>
                  </HashLink>
                  <button className="menu-button-navbar-close" onClick={()=> setShowNavBarButtons(!shwowNavBarButtons)}><MdMenu /></button>
                </ul>
              ) : <></>}
            <ul className="links-normal">
              <NavLink to="/menu" className="navbar-buttons--">
                <BiFoodMenu />
                <span>Menu</span>
              </NavLink>
              <NavLink to="/shopping-cart" className="navbar-buttons--">
                <FaShoppingCart />
                <span>Shopping Cart</span>
              </NavLink>
              <HashLink to={"/home#address"} className="navbar-buttons--">
                <IoMdContact />
                <span>Contact</span>
              </HashLink>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

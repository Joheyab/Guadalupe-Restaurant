import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { MdDelete } from "react-icons/md"
import "./ShoppingCart.css";
export function ShoppingCart() {
  return (
    <>
      <NavBar />
      <main>
        <div className="shopping-cart-container">
          <div className="left-container">
            <div className="header-shopping-cart-container">
              <h2>Shopping Cart</h2>
              <span>3 items</span>
            </div>
            <div className="dishes-shopping-container">
              <div className="dishes-card-shopping-cart">
                <img
                  src={`/images/dish_1.webp`}
                  className="dish-image-shopping"
                ></img>
                <div className="information-dish-card-shopping">
                  <span className="name-span">Name</span>
                  <span className="name-dish-span">Rice</span>
                </div>
                <div className="buttons-shopping-cart">
                  <button className="decrement-button-shopping">-</button>
                  <span>2</span>
                  <button className="increment-button-shopping">+</button>
                </div>
                <span className="price-dish-card-shopping">$10</span>
                <button className="delete-button">
                  <MdDelete />
                </button>
              </div>
              <div className="dishes-card-shopping-cart">
                <img
                  src={`/images/dish_2.webp`}
                  className="dish-image-shopping"
                ></img>
                <div className="information-dish-card-shopping">
                  <span className="name-span">Name</span>
                  <span className="name-dish-span">Salad fhasddfashndasd</span>
                </div>
                <div className="buttons-shopping-cart">
                  <button className="decrement-button-shopping">-</button>
                  <span>1</span>
                  <button className="increment-button-shopping">+</button>
                </div>
                <span className="price-dish-card-shopping">$5</span>
                <button className="delete-button">
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="header-checkout-container">
              <h3>Summary</h3>
            </div>
            <div className="summary-items-price">
              <span>Items 3</span>
              <span>$20</span>
            </div>
            <div className="province">
              <label>Province</label>
              <input type="text" placeholder="Select your province"></input>
            </div>
            <div className="discount">
              <label>Discount Code</label>
              <input type="text" placeholder="Write your discount code"></input>
            </div>
            <div className="footer-checkout-container">
              <div className="total-price">
                <span>Total Price</span>
                <span>$35</span>
              </div>
              <button className="checkout-button">Checkout</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

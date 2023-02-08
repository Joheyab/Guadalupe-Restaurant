import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { MdDelete } from "react-icons/md";
import { BsCaretDownFill } from "react-icons/bs";
import "./ShoppingCart.css";
import { useState } from "react";
import { DishCardSophhingCart } from "../components/DishCardShoppingCart";
export function ShoppingCart() {
  const [amountItems, setAmountItems] = useState(2);
  const [preTotalPrice, setPreTotalPrice] = useState(9);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [provinceSelect, setProvinceSelect] = useState("Select your province");
  return (
    <>
      <NavBar />
      <main>
        <div className="shopping-cart-container">
          <div className="left-container">
            <div className="header-shopping-cart-container">
              <h2>Shopping Cart</h2>
              <span>{amountItems} items</span>
            </div>
            <div className="dishes-shopping-container">
              <DishCardSophhingCart
                image="dish_1.webp"
                name="Rice"
                price={4.5}
                updateAmountItems={setAmountItems}
                amountItems={amountItems}
                preTotalPrice={preTotalPrice}
                setPreTotalPrice={setPreTotalPrice}
              />
            </div>
          </div>
          <div className="right-container">
            <div className="header-checkout-container">
              <h3>Summary</h3>
            </div>
            <div className="summary-items-price">
              <span>Items {amountItems}</span>
              <span>${preTotalPrice}</span>
            </div>
            <div className="province">
              <label>Province</label>
              <div>
                <button
                  onClick={() =>
                    showOptions ? setShowOptions(false) : setShowOptions(true)
                  }
                >
                  <span>{provinceSelect}</span>
                  <BsCaretDownFill />
                </button>
                {showOptions ? (
                  <div className="options-province">
                    <button
                      onClick={() => {
                        setProvinceSelect("San José");
                        setPreTotalPrice(preTotalPrice + 0.50);
                        setShowOptions(false);
                      }}
                    >
                      San José
                    </button>
                    <button
                      onClick={() => {
                        setProvinceSelect("Cartago");
                        setPreTotalPrice(preTotalPrice + 0.60);
                        setShowOptions(false);
                      }}
                    >
                      Cartago
                    </button>
                    <button
                      onClick={() => {
                        setProvinceSelect("Heredia");
                        setPreTotalPrice(preTotalPrice + 0.70);
                        setShowOptions(false);
                      }}
                    >
                      Heredia
                    </button>
                    <button
                      onClick={() => {
                        setProvinceSelect("Alajuela");
                        setPreTotalPrice(preTotalPrice + 0.80);
                        setShowOptions(false);
                      }}
                    >
                      Alajuela
                    </button>
                    <button
                      onClick={() => {
                        setProvinceSelect("Guanacaste");
                        setPreTotalPrice(preTotalPrice + 1.20);
                        setShowOptions(false);
                      }}
                    >
                      Guanacaste
                    </button>
                    <button
                      onClick={() => {
                        setProvinceSelect("Puntarenas");
                        setPreTotalPrice(preTotalPrice + 1.40);
                        setShowOptions(false);
                      }}
                    >
                      Puntarenas
                    </button>
                    <button
                      onClick={() => {
                        setProvinceSelect("Limón");
                        setPreTotalPrice(preTotalPrice + 1.60);
                        setShowOptions(false);
                      }}
                    >
                      Limón
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="discount">
              <label>Discount Code</label>
              <input type="text" placeholder="Write your discount code"></input>
            </div>
            <div className="footer-checkout-container">
              <div className="total-price">
                <span>Total Price</span>
                <span>${totalPrice}</span>
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

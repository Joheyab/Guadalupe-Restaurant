import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { MdDelete } from "react-icons/md";
import { BsCaretDownFill } from "react-icons/bs";
import "./ShoppingCart.css";
import { useEffect, useState } from "react";
import { DishCardSophhingCart } from "../components/DishCardShoppingCart";
export function ShoppingCart() {
  const [amountItems, setAmountItems] = useState(3);
  const [preTotalPrice, setPreTotalPrice] = useState(19.98);
  const [totalPrice, setTotalPrice] = useState(preTotalPrice);
  const [showOptions, setShowOptions] = useState(false);
  const [provinceSelect, setProvinceSelect] = useState(["Select your province", 0]);
  const [discountCode, setDiscountCode] = useState('')
  const [appDiscounts, setAppDiscounts] = useState([])
  const [showError, setShowError] = useState(false)
  const getDiscounts = () =>{
    fetch("./DiscountCodes.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setAppDiscounts(myJson);
      });
  }
  const verifyDiscount = () =>{
   appDiscounts.filter((item)=> item.Code === discountCode ? (setTotalPrice(totalPrice -(item.Discount*totalPrice/100)), setShowError(false), retrurn)   : setShowError(true))
  }

  useEffect(() => {
    getDiscounts();
  }, []);
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
                name="Rice Zuchin"
                price={8.99}
                updateAmountItems={setAmountItems}
                amount={2}
                amountItems={amountItems}
                preTotalPrice={preTotalPrice}
                setPreTotalPrice={setPreTotalPrice}
                setTotalPrice={setTotalPrice}
                totalPrice={totalPrice}
              />
              <DishCardSophhingCart
                image="drink_2.webp"
                name="Coca Cola"
                price={2}
                updateAmountItems={setAmountItems}
                amount={1}
                amountItems={amountItems}
                preTotalPrice={preTotalPrice}
                setPreTotalPrice={setPreTotalPrice}
                setTotalPrice={setTotalPrice}
                totalPrice={totalPrice}
              />
            </div>
          </div>
          <div className="right-container">
            <div className="header-checkout-container">
              <h3>Summary</h3>
            </div>
            <div className="summary-items-price">
              <span>Items {amountItems}</span>
              <span>${preTotalPrice.toFixed(2)}</span>
            </div>
            <div className="province">
              <label>Province</label>
              <div>
                <button
                  onClick={() =>
                    showOptions ? setShowOptions(false) : setShowOptions(true)
                  }
                >
                  <span>{provinceSelect[0]}</span>
                  <BsCaretDownFill />
                </button>
                {showOptions ? (
                  <div className="options-province">
                    <button
                      onClick={() => {
                        setProvinceSelect(["San José", 0.40]);
                        setTotalPrice(totalPrice - provinceSelect[1] + 0.40);
                        setShowOptions(false);
                      }}
                    >
                      San José
                    </button>
                    <button
                      onClick={() => {
                        setProvinceSelect(["Cartago", 0.60]);
                        setTotalPrice(totalPrice - provinceSelect[1] + 0.60);
                        setShowOptions(false);
                      }}
                    >
                      Cartago
                    </button>
                    <button
                      onClick={() => {
                        setProvinceSelect(["Heredia",0.70]);
                        setTotalPrice(totalPrice - provinceSelect[1] + 0.70);
                        setShowOptions(false);
                      }}
                    >
                      Heredia
                    </button>
                    <button
                      onClick={() => {
                        setProvinceSelect(["Alajuela", 0.80]);
                        setTotalPrice(totalPrice - provinceSelect[1] + 0.80);
                        setShowOptions(false);
                      }}
                    >
                      Alajuela
                    </button>
                    <button
                      onClick={() => {
                        setProvinceSelect(["Guanacaste", 1.20]);
                        setTotalPrice(totalPrice - provinceSelect[1] + 1.20);
                        setShowOptions(false);
                      }}
                    >
                      Guanacaste
                    </button>
                    <button
                      onClick={() => {
                        setProvinceSelect(["Puntarenas", 1.40]);
                        setTotalPrice(totalPrice - provinceSelect[1] + 1.40);
                        setShowOptions(false);
                      }}
                    >
                      Puntarenas
                    </button>
                    <button
                      onClick={() => {
                        setProvinceSelect(["Limón",1.60]);
                        setTotalPrice(totalPrice - provinceSelect[1] + 1.60);
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
              <input value={discountCode} placeholder="Write your discount code" onChange={e=> setDiscountCode(e.target.value)
              }></input>
              <div className="verify-code">
                {showError ? <span className="error-code">Error code. Please enter a correct code</span>: null}
                
                <button className="verify-code-button" onClick={()=> verifyDiscount()}>Verify Code</button>
              </div>
            </div>
            <div className="footer-checkout-container">
              <div className="total-price">
                <span>Total Price</span>
                <span>${totalPrice.toFixed(2)}</span>
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

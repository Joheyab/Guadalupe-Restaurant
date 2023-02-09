import { useState } from "react";
import { MdDelete } from "react-icons/md";
export function DishCardSophhingCart({
  image,
  name,
  price,
  updateAmountItems,
  amountItems,
  amount,
  setPreTotalPrice,
  preTotalPrice,
  setTotalPrice,
  totalPrice
}) {
  const [amountDish, setAmountDish] = useState(amount);
  const [print, setPrint] = useState(true);
  const verifyPrint = () => {
    amountDish === 1 ? setPrint(false) : null;
  };
  const handleIncrement = () => {
    setAmountDish(amountDish + 1);
    updateAmountItems(amountItems + 1);
    setPreTotalPrice(preTotalPrice + price);
    setTotalPrice(totalPrice + price)
  };

  const handleDecrement = () => {
    amountDish >= 1 ? setAmountDish(amountDish - 1) : null;
    amountItems != 0 ? updateAmountItems(amountItems - 1) : null;
    setPreTotalPrice(preTotalPrice - price);
    setTotalPrice(totalPrice - price)
    verifyPrint();
  };

  const calcular =() =>{
    return "$" + (amountDish * price).toFixed(2)
  }
  return (
    <>
      {print ? (
        <div className="dishes-card-shopping-cart">
          <img src={`/images/${image}`} className="dish-image-shopping"></img>
          <div className="information-dish-card-shopping">
            <span className="name-span">Name</span>
            <span className="name-dish-span">{name}</span>
          </div>
          <div className="buttons-shopping-cart">
            <button
              className="decrement-button-shopping"
              onClick={handleDecrement}
            >
              -
            </button>
            <span>{amountDish}</span>
            <button
              className="increment-button-shopping"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <span className="price-dish-card-shopping">
            {calcular()}
          </span>
          <button
            className="delete-button"
            onClick={() => {
              setPrint(false);
              updateAmountItems(amountItems - amountDish);
              setPreTotalPrice(preTotalPrice - price * amountDish);
              setTotalPrice(totalPrice - price * amountDish)
            }}
          >
            <MdDelete />
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

import { useState } from "react";
import "../css/DishCard.css";
export function DishCard({ imagen, category, price, description, name }) {
  const [amountDish, setAmountDish] = useState(0);

  const handleIncrement = () =>{
    setAmountDish(amountDish + 1)
  }

  const handleDecrement = () =>{
    setAmountDish(amountDish - 1)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <>
      <div className="dish-card">
        <img src={`/images/${imagen}`} className="dish-image"></img>
        <form className="form-add-dish" onSubmit={handleSubmit}>
          <div className="buttons-form">
            <button className="decrement" onClick={handleDecrement}>-</button>
            <span>{amountDish}</span>
            <button className="increment" onClick={handleIncrement}>+</button>
          </div>
          <button className="add-button" type="submit">Add</button>
        </form>
        <div className="information-dish-card">
          <span className="name-dish">{`${name}`}</span>
          <span className="category-dish">{`${category}`}</span>
          <span>{`${description}`}</span>
          <strong>${price}</strong>
        </div>
      </div>
    </>
  );
}

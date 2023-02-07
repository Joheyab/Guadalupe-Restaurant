import "../css/DishCard.css"
export function DishCard({imagen, category, price, description}){
    return(
        <>
        <div className="dish-card">
              <img src={`/images/${imagen}`} className="dish-image"></img>
              <span>{`Category: ${category}`}</span>
              <span>{`${description}`}</span>
              <strong>${price}</strong>
        </div>
        </>
    )
}
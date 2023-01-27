import "../css/SliderCard.css"
export function SliderCard({imagen, category, price}){
    return(
        <>
        <div className="slider-card">
              <img src={`public/images/${imagen}`} className="dish-image"></img>
              <span>{`Category: ${category}`}</span>
              <strong>{price}</strong>
        </div>
        </>
    )
}
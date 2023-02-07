import { useState, useEffect } from "react";
import "../css/SideBar.css";


export function SideBar(props) {

  const [showButton, setShowButton] = useState(true);
  const [categorySelected, setCategorySelected] = useState("All");
  const [priceSelected, setPriceSelected] = useState("0")
  return (
    <>
      <div className={showButton ? "hidden-sideBar" : "sideBar"}>
        {showButton ? (
          <button
            onClick={() => setShowButton(false)}
            className="open-filters-button"
          >
            {" "}
            Open Filters
          </button>
        ) : (
          <>
            <div className="filter-menu">
              <span>Filters</span>
              <span>Categories:</span>
              <div className="category-filters">
                <input
                  className="checkbox-tools"
                  id="all"
                  type="radio"
                  name="category"
                  value="All"
                  onClick={() => setCategorySelected("All")}
                />
                <label className="for-checkbox-tools" htmlFor="all">
                  All
                </label>
                <input
                  className="checkbox-tools"
                  id="rices"
                  type="radio"
                  name="category"
                  value="Rices"
                  onClick={() => setCategorySelected("Rices")}
                />
                <label className="for-checkbox-tools" htmlFor="rices">
                  Rices
                </label>
                <input
                  className="checkbox-tools"
                  id="salads"
                  type="radio"
                  name="category"
                  value="Salads"
                  onClick={() => setCategorySelected("Salads")}
                />
                <label className="for-checkbox-tools" htmlFor="salads">
                  Salads
                </label>
                <input
                  className="checkbox-tools"
                  id="pastas"
                  type="radio"
                  name="category"
                  onClick={() => setCategorySelected("Pastas")}
                />
                <label className="for-checkbox-tools" htmlFor="pastas">
                  Pastas
                </label>
                <input
                  className="checkbox-tools"
                  id="hamburgers"
                  type="radio"
                  name="category"
                  onClick={() => setCategorySelected("Hamburgers")}
                />
                <label className="for-checkbox-tools" htmlFor="hamburgers">
                  Hamburgers
                </label>
                <input
                  className="checkbox-tools"
                  id="sandwiches"
                  type="radio"
                  name="category"
                  onClick={() => setCategorySelected("Sandwiches")}
                />
                <label className="for-checkbox-tools" htmlFor="sandwiches">
                  Sandwiches
                </label>
                <input
                  className="checkbox-tools"
                  id="desserts"
                  type="radio"
                  name="category"
                  onClick={() => setCategorySelected("Desserts")}
                />
                <label className="for-checkbox-tools" htmlFor="desserts">
                  Desserts
                </label>
                <input
                  className="checkbox-tools"
                  id="drinks"
                  type="radio"
                  name="category"
                  onClick={() => setCategorySelected("Drinks")}
                />
                <label className="for-checkbox-tools" htmlFor="drinks">
                  Drinks
                </label>
              </div>
              <span>Prices:</span>
              <div className="prices-filters">
                <input
                  className="checkbox-budget"
                  type="radio"
                  name="budget"
                  id="budget-1"
                  value="1"
                  onClick={() =>setPriceSelected("1")}
                />
                <label className="for-checkbox-budget" htmlFor="budget-1">
                  <span data-hover="0$ - 4$">0$ - 4$</span>
                </label>
                <input
                  className="checkbox-budget"
                  type="radio"
                  name="budget"
                  id="budget-2"
                  value="2"
                  onClick={() => setPriceSelected("2")}
                />
                <label className="for-checkbox-budget" htmlFor="budget-2">
                  <span data-hover="4$ - 8$">4$ - 8$</span>
                </label>
                <input
                  className="checkbox-budget"
                  type="radio"
                  name="budget"
                  id="budget-3"
                  value="3"
                  onClick={() => setPriceSelected("3")}
                />
                <label className="for-checkbox-budget" htmlFor="budget-3">
                  <span data-hover="8$ - 12$">8$ - 12$</span>
                </label>
                <input
                  className="checkbox-budget"
                  type="radio"
                  name="budget"
                  id="budget-4"
                  value="4"
                  onClick={() => setPriceSelected("4")}
                />
                <label className="for-checkbox-budget" htmlFor="budget-4">
                  <span data-hover="12$ - MAX">12$ - MAX</span>
                </label>
              </div>
              <button
                className="search-button-filters"
                onClick={()=>{props.getPriceFilter(priceSelected); props.getCategoryFilter(categorySelected); props.search()}}
              >
                Search
              </button>
            </div>
          </>
        )}
        {!showButton ? (
          <>
            <div className="container-close-filter-button">
              <button
                onClick={() => setShowButton(true)}
                className="close-filters-button"
              >
                Close Filters
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

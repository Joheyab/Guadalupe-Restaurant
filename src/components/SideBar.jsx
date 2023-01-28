import { useState } from "react";
import "../css/SideBar.css";
export function SideBar() {
  const [showButton, setShowButton] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
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
                <ul>
                  <li>
                    <span>All</span>
                    <input type="radio" name="category" value="All"/>
                  </li>
                  <li>
                    <span>Rices</span>
                  <input type="radio" name="category"/>
                  </li>
                  <li>
                    <span>Salads</span>
                    <input type="radio" name="category"/>
                  </li>
                  <li>
                    <span>Pastas</span>
                    <input type="radio" name="category"/>
                  </li>
                  <li>
                    <span>Hamburgers</span>
                    <input type="radio" name="category"/>
                  </li>
                  <li>
                    <span>Sandwiches</span>
                    <input type="radio" name="category"/>
                  </li>
                  <li>
                    <span>Desserts</span>
                    <input type="radio" name="category"/>
                  </li>
                  <li>
                    <span>Drinks</span>
                    <input type="radio" name="category"/>
                  </li>
                </ul>
              </div>
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

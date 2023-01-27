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
              <ul>
                <li>Rices</li>
                <li>Pastas</li>
                <li>Hamburgers</li>
                <li>Sandwiches</li>
                <li>Drinks</li>
                <li>Desserts</li>
              </ul>
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

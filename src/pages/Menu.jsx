import { useEffect, useState } from "react";
import { DishCard } from "../components/DishCard";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import "./Menu.css"
export function Menu() {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("0");
  const [other, setOther] = useState([]);
  const [data, setData] = useState([]);
  function getData() {
    fetch("./Dishes.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
          setData(myJson)
      });
  }

  const searchDishes =() =>{
    if(categoryFilter !== "All"){
      const newData = data.filter((item) => item.Category === categoryFilter)
      setOther(newData)
    }
  }
  useEffect(() => {
    getData();
  }, [other]);

  return (
    <>
      <NavBar />
      <main className="menu-container">
          <SideBar getCategoryFilter={setCategoryFilter} getPriceFilter={setPriceFilter} search={()=>searchDishes()}/>
          <section className="dishes-menu-container">
            {
              categoryFilter === "All" ? data.map((item) => <DishCard imagen={item.Image} category={item.Category} description={item.Description} price={item.Price} key={item.ID}/>) :
              other.map((item) => <DishCard imagen={item.Image} category={item.Category} description={item.Description} price={item.Price} key={item.ID}/>) 
            }
          </section>
      </main>
      <Footer/>
    </>
  );
}

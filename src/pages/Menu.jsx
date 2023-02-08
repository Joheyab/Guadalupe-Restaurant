import { useEffect, useState } from "react";
import { DishCard } from "../components/DishCard";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import "./Menu.css";
export function Menu() {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("0");
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
        setData(myJson);
      });
  }
  useEffect(() => {
    getData();
  }, [data]);

  return (
    <>
      <NavBar />
      <main className="menu-container">
        <SideBar
          getCategoryFilter={setCategoryFilter}
          getPriceFilter={setPriceFilter}
        />
        <section className="dishes-menu-container">
          {categoryFilter === "All"
            ? data.map((item) => (
                <DishCard
                  imagen={item.Image}
                  name={item.Name}
                  category={item.Category}
                  description={item.Description}
                  price={item.Price}
                  key={item.ID}
                />
              ))
            : priceFilter === "0" ? data
                .filter((item) => item.Category === categoryFilter)
                .map((dish) => (
                  <DishCard
                    imagen={dish.Image}
                    name={dish.Name}
                    category={dish.Category}
                    description={dish.Description}
                    price={dish.Price}
                    key={dish.ID}
                  />
                )) : priceFilter === "1" ? data.filter((item) =>item.Category === categoryFilter && item.Price >= 0 && item.Price <=4).map((dish) => (
                  <DishCard
                    imagen={dish.Image}
                    name={dish.Name}
                    category={dish.Category}
                    description={dish.Description}
                    price={dish.Price}
                    key={dish.ID}
                  />)):
                priceFilter === "2" ? data.filter((item) =>item.Category === categoryFilter && item.Price >= 4 && item.Price <=8).map((dish) => (
                  <DishCard
                    imagen={dish.Image}
                    name={dish.Name}
                    category={dish.Category}
                    description={dish.Description}
                    price={dish.Price}
                    key={dish.ID}
                  />)): priceFilter === "3" ? data.filter((item) =>item.Category === categoryFilter && item.Price >= 8 && item.Price <=12).map((dish) => (
                    <DishCard
                      imagen={dish.Image}
                      name={dish.Name}
                      category={dish.Category}
                      description={dish.Description}
                      price={dish.Price}
                      key={dish.ID}
                    />)): data.filter((item) =>item.Category === categoryFilter && item.Price >= 12).map((dish) => (
                      <DishCard
                        imagen={dish.Image}
                        name={dish.Name}
                        category={dish.Category}
                        description={dish.Description}
                        price={dish.Price}
                        key={dish.ID}/>))}
        </section>
      </main>
      <Footer />
    </>
  );
}

import { DishCard } from "../components/DishCard";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import "./Menu.css"
export function Menu() {
  return (
    <>
      <NavBar />
      <main className="menu-container">
          <SideBar/>
          <section className="dishes-menu-container">
            <DishCard imagen={"dish_1.webp"}
              category={"Rices"}
              description={"Rice with zucchini, soft-boiled egg and parsley"}
              price={"$8.99"}/>
              <DishCard imagen={"dish_1.webp"}
              category={"Rices"}
              description={"Rice with zucchini, soft-boiled egg and parsley"}
              price={"$8.99"}/>
              <DishCard imagen={"dish_1.webp"}
              category={"Rices"}
              description={"Rice with zucchini, soft-boiled egg and parsley"}
              price={"$8.99"}/>
              <DishCard imagen={"dish_1.webp"}
              category={"Rices"}
              description={"Rice with zucchini, soft-boiled egg and parsley"}
              price={"$8.99"}/>
              <DishCard imagen={"dish_1.webp"}
              category={"Rices"}
              description={"Rice with zucchini, soft-boiled egg and parsley"}
              price={"$8.99"}/>
              <DishCard imagen={"dish_1.webp"}
              category={"Rices"}
              description={"Rice with zucchini, soft-boiled egg and parsley"}
              price={"$8.99"}/>
              <DishCard imagen={"dish_1.webp"}
              category={"Rices"}
              description={"Rice with zucchini, soft-boiled egg and parsley"}
              price={"$8.99"}/>
          </section>
      </main>
      <Footer/>
    </>
  );
}

import "./Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SliderCard } from "../components/SliderCard";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { AddressCard } from "../components/AddressCard";
import { NavLink } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1365 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1365, min: 765 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 765, min: 0 },
    items: 1,
  },
};

export function Home() {
  return (
    <>
      <NavBar />
      <main>
        <section className="first-container">
          <h1>Welcome to</h1>
          <h2>Guadalupe´s Restaurant</h2>
          <h2>
            It will be a pleasure to serve you and provide you with the quality
            of food you deserve.
          </h2>
        </section>
        <section className="second-container">
          <h1>Some of our dishes</h1>
          <Carousel responsive={responsive} showDots={true} className="slider">
            <SliderCard
              imagen={"dish_1.webp"}
              category={"Rices"}
              price={"$8.99"}
            />
            <SliderCard
              imagen={"dish_2.webp"}
              category={"Salads"}
              price={"$7.99"}
            />
            <SliderCard
              imagen={"dish_3.webp"}
              category={"Pastas"}
              price={"$8.50"}
            />
            <SliderCard
              imagen={"drink_1.webp"}
              category={"Drinks"}
              price={"$3.00"}
            />
            <SliderCard
              imagen={"dish_4.webp"}
              category={"Hamburgers"}
              price={"$6.00"}
            />
            <SliderCard
              imagen={"dish_5.webp"}
              category={"Sandwiches"}
              price={"$5.50"}
            />
            <SliderCard
              imagen={"drink_5.webp"}
              category={"Drinks"}
              price={"$5.50"}
            />
            <SliderCard
              imagen={"dish_7.webp"}
              category={"Desserts"}
              price={"$3.25"}
            />
          </Carousel>
          <NavLink to="/menu" className="button-view-menu"> View Menu</NavLink>
        </section>
        <section className="third-container">
          <div className="description-vegetables">
            <h1>
              Our recipes always have fresh ingredients and are made with love
              for our customers.
            </h1>
          </div>
        </section>
        <section className="fourth-container" id="address">
          <AddressCard
            phone={"34-9611"}
            street={"4557 De Silva St"}
            city={"Fremont"}
            state={"California (CA)"}
            zipCode={"94538"}
            country={"USA"}
            address={"4557 De Silva St, Fremont, California 94538, USA"}
          />
        </section>
        <Footer/>
      </main>
    </>
  );
}

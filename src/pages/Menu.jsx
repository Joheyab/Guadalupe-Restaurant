import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

export function Menu() {
  return (
    <>
      <NavBar />
      <main>
        <aside>
          <SideBar/>
        </aside>
      </main>
      <Footer/>
    </>
  );
}

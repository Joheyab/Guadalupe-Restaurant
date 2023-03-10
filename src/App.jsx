import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { ShoppingCart} from "./pages/ShoppingCart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <ErrorPage />,
    },
    {
      path:"/home",
      element: <Home/>,
      errorElement: <ErrorPage />,
    },
    {
      path:"/menu",
      element: <Menu/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/shopping-cart",
      element: <ShoppingCart/>,
      errorElement: <ErrorPage />,
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

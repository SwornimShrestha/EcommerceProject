import Header from "./components/Header/Header";
import Home from "./modules/Home/Home";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Product from "./modules/Product/Product";
import Products from "./modules/Products/Products";
import CategoryProducts from "./modules/CategoryProducts/CategoryProducts";
import Cart from "./modules/Cart/Cart";
import Contact from "./modules/Contact/Contact";
import Admin from "./modules/Admin/Admin";
const Layout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/category/:name",
          element: <CategoryProducts />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },

        {
          path: "/admin",
          element: <Admin />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

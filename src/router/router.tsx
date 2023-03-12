import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Products from "../pages/products/Products";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Products />,
      errorElement: <ErrorPage />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

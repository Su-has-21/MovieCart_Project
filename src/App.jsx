import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Logo from "./Pages/Logo";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Shopping from "./Pages/Shopping";
import Nav from "./Components/Nav";
import "./nav.css";
import ProductProvider from "./context/ProductContext";
import Footer from "./Pages/Footer";

let router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="content_container">
          <Nav></Nav>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </>
    ),
    children: [
      {
        path: "/logo",
        element: <Logo></Logo>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/shopping",
        element: <Shopping></Shopping>,
      },
    ],
  },
]);

const App = () => {
  return (
    <ProductProvider>
      <div id="container">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </ProductProvider>
  );
};

export default App;

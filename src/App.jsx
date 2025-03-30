import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Logo from "./Pages/Logo";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Cart from "./Components/Cart";
import Shopping from "./Pages/Shopping";
import Nav from "./Components/Nav";
import "./styles/main.css";
import "./styles/theme.css";
import "./App.css";
import ProductProvider from "./context/ProductContext";
// import Footer from "./Pages/Footer";

let router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="app-container">
        <Nav />
        <main className="main-content container">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    ),
    children: [
      {
        path: "/logo",
        element: <Logo />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/shopping",
        element: <Shopping />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  );
};

export default App;

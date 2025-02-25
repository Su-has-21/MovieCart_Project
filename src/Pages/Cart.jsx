import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Card from "../Components/Card";

const Cart = () => {
  const { cart } = useContext(ProductContext);
  return (
    <div className="cart">
      {cart.map((x) => {
        // console.log(x);

        return <Card obj={x} key={x.id}></Card>;
      })}
    </div>
  );
};

export default Cart;

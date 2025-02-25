import React, { useContext, useEffect } from "react";
import Card from "../Components/Card";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const Shopping = () => {
  let { product } = useContext(ProductContext);

  let navigate = useNavigate();

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user == null) {
      navigate("/signup");
    }
  });

  return (
    <div className="pages shopping">
      {product.map((x) => {
        // console.log(x);

        return <Card obj={x} key={x.id}></Card>;
      })}
    </div>
  );
};

export default Shopping;

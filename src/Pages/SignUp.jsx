import axios from "axios";
import React, { useState } from "react";

const SignUp = () => {
  let [state, setState] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
  });

  let { name, email, phone_number, password } = state;

  let handleChanges = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    try {
      handleData();
      window.alert("SignUp Successful");
      localStorage.setItem("user", name);
    } catch {
      window.alert("Invalid");
    }
  };

  let handleData = async (e) => {
    // e.preventDefault();
    try {
      let payload = { name, email, phone_number, password };
      let { LoginData } = await axios.post(
        "http://localhost:3000/user",
        payload
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="pages signup">
      <form action="" onSubmit={handleSubmit} id="form2">
        <div className="field">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            id=""
            onChange={handleChanges}
            className="bar1"
          />
        </div>
        <div className="field">
          <label htmlFor="">Email:</label>
          <input
            type="email"
            name="email"
            id=""
            onChange={handleChanges}
            className="bar1"
          />
        </div>
        <div className="field">
          <label htmlFor="">Phone_Number:</label>
          <input
            type="number"
            name="phone_number"
            id=""
            onChange={handleChanges}
            className="bar1"
          />
        </div>
        <div className="field">
          <label htmlFor="">Enter Password:</label>
          <input
            type="password"
            name="password"
            id=""
            onChange={handleChanges}
            className="bar1"
          />
        </div>
        <input type="submit" value="Submit" id="signupsubmit" />
      </form>
    </div>
  );
};

export default SignUp;

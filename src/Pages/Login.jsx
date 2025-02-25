import React, { useState } from "react";

const Login = () => {
  let [state, setState] = useState({
    email: "",
    password: "",
  });

  let { email, password } = state;

  let handleChanges = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log({ ...state });
    } catch {
      console.log("Invalid");
    }
  };

  return (
    <div className="pages login">
      <form action="" onSubmit={handleSubmit} id="form1">
        <div className="fields">
          <label htmlFor="">Email:</label>
          <input
            type="email"
            name="email"
            id=""
            onChange={handleChanges}
            className="bar"
          />
        </div>

        <br />
        <div className="fields">
          <label htmlFor="">Password:</label>
          <input
            type="password"
            name="password"
            id=""
            onChange={handleChanges}
            className="bar"
          />
        </div>

        <br />
        <input type="submit" value="Submit" id="loginsubmit" />
      </form>
    </div>
  );
};

export default Login;

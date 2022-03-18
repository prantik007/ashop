import React, { useState } from "react";
import ButtonAshop from "../UI/ButtonAshop";
import { auth } from "../../Firebase/Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (event) => {
    event.preventDefault();

    auth
    .signInWithEmailAndPassword(email, password)
    
    .then((auth) => {
      console.log(auth)
      navigate("/");
    })
    .catch(error=>alert(error.message))
  };

  const signUp = (event) => {
    event.preventDefault();

    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      if(auth){
        navigate("/");
      }
      
    })
    .catch(error=>alert(error.message))
  };

 
  return (
    <div className="container w-25 mt-5">
      <label className="display-5 mb-4"> LOGIN </label>
      <form>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            autoComplete="off"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="remember" />{" "}
            Remember me
          </label>
        </div>
        <div className="d-flex justify-content-between">
        <ButtonAshop
          type="submit"
          onClick={signIn}
          style={{ padding: "5px", width: "80px" }}
        >
          Login
        </ButtonAshop>
        <ButtonAshop
          type="submit"
          onClick={signUp}
          style={{ padding: "5px", width: "80px" }}
        >
          Sign Up
        </ButtonAshop>
        </div>
      </form>
    </div>
  );
};

export default Login;

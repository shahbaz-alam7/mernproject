import React from "react";
import "./CSS/login.css";
import { NavLink, useNavigate } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import loginpic from "./Images/login.png";
import { useState, useContext } from "react";
import { UserContext } from "../App";
const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState({
    email: "",
    password: "",
  });
  const inputHandle = (e) => {
    const { name, value } = e.target;
    setInputVal({ ...inputVal, [name]: value });
  };
  const submitdata = async (e) => {
    e.preventDefault();
    // console.log(inputVal);
    const { email, password } = inputVal;
    let res = await fetch("https://itz-shahbaz.herokuapp.com/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      alert("Invalid Credentials");
    } else {
      // alert("Logged in");
      dispatch({ type: "USER", payload: true });
      navigate("/");
    }
    // console.log(res);
    // console.log(data);
  };
  return (
    <>
      <section className="login">
        <div className="logincontainer">
          <div className="box">
            <div className="imgbox">
              <h2 id="signupheading">Login</h2>
              <img id="mypic" src={loginpic} alt="pic" />
              <NavLink to="/register">Create an Account</NavLink>
            </div>
            <form className="inputbox" autoComplete="off">
              <div className="inputfeild">
                <EmailIcon />
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={inputVal.email}
                  onChange={inputHandle}
                />
              </div>
              <div className="inputfeild">
                <LockIcon />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  autoComplete="off"
                  value={inputVal.password}
                  onChange={inputHandle}
                />
              </div>
              <button className="cta" onClick={submitdata}>
                <span>Log In</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;

import React, { useState } from "react";
import "./CSS/signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import WorkIcon from "@material-ui/icons/Work";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import LockIcon from "@material-ui/icons/Lock";
import VisibilityIcon from "@material-ui/icons/Visibility";
import loginpic from "./Images/signup.png";

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();
  const changeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const submitData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = userData;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, work, password, cpassword }),
    });
    const result = await res.json();
    if (res.status === 422 || !result) {
      alert("Not registered");
    } else {
      setUserData({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: "",
      });
      alert("Registered");
      navigate("/login");
    }
  };
  return (
    <>
      <section className="signup">
        <div className="signup-container">
          <div className="box">
            <div className="inputbox">
              <h2 id="signupheading">Sign Up</h2>
              <form method="post" autoComplete="off">
                <div className="inputfeild">
                  <PersonIcon />
                  <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={changeInput}
                    placeholder="Your Name"
                  />
                </div>
                <div className="inputfeild">
                  <EmailIcon />
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={changeInput}
                    placeholder="Your Email"
                  />
                </div>
                <div className="inputfeild">
                  <PhoneInTalkIcon />
                  <input
                    type="text"
                    name="phone"
                    value={userData.phone}
                    onChange={changeInput}
                    placeholder="Mobile Number"
                  />
                </div>
                <div className="inputfeild">
                  <WorkIcon />
                  <input
                    type="text"
                    name="work"
                    value={userData.work}
                    onChange={changeInput}
                    placeholder="Your Professsion"
                  />
                </div>
                <div className="inputfeild">
                  <VisibilityIcon />
                  <input
                    type="password"
                    name="password"
                    autoComplete="off"
                    value={userData.password}
                    onChange={changeInput}
                    placeholder="Password"
                  />
                </div>
                <div className="inputfeild">
                  <LockIcon />
                  <input
                    type="password"
                    autoComplete="off"
                    name="cpassword"
                    value={userData.cpassword}
                    onChange={changeInput}
                    placeholder="Confirm your password"
                  />
                </div>
                <button className="cta" onClick={submitData}>
                  <span>Sign Up</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </form>
            </div>
            <div className="imgbox">
              <img id="mypic" src={loginpic} alt="pic" />
              <NavLink to="/login">I'm already Register</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;

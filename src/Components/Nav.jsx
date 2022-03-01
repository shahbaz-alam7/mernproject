import React, { useContext } from "react";
import logo from "./Images/logo.png";
import "./CSS/nav.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

const Nav = () => {
  const { state, dispatch } = useContext(UserContext);
  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact Us
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              Account
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">
              Logout
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact Us
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              Account
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </li>
        </>
      );
    }
  };
  return (
    <>
      <nav
        className="navbar navbar-expand navbar-expand-lg navbar-light bg-light"
        id="nav"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" id="navpic">
            <img src={logo} alt="logo" />
          </a>
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0" id="nav-ul">
            <RenderMenu />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;

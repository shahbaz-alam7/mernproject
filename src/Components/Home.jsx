import React, { useState } from "react";
import { useEffect } from "react";
import "./CSS/home.css";
import home from "./Images/home.png";
const Home = () => {
  const [name, setName] = useState("");
  const data = async () => {
    try {
      let res = await fetch("https://itz-shahbaz.herokuapp.com/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      res = await res.json();
      setName(res.name);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    data();
  }, []);

  return (
    <>
      <section className="home">
        <div className="home-container ">
          <div className="box">
            <div id="content">
              <br />
              {name ? (
                <>
                  <span>Welcome,</span>
                  <p>
                    <span id="name">{name}</span>
                  </p>
                  <p>Happy to see you back... </p>
                </>
              ) : (
                <>
                  <span>Welcome, to</span>
                  <p>
                    <span id="name">Mohd Shahbaz Alam's</span>
                  </p>
                  <p>MERN Project, hope you like it... </p>
                </>
              )}
            </div>
            <div className="imgbox">
              <img id="mypic" src={home} alt="pic" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

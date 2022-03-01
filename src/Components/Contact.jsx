import React, { useEffect, useState } from "react";
import "./CSS/contact.css";
import email from "./Images/icons/send-message.png";
import cellphone from "./Images/icons/cell-phone.png";
import address from "./Images/icons/home-address.png";
const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
  });

  // ! Getting name email and phone from backend
  const userContact = async () => {
    try {
      const res = await fetch("https://itz-shahbaz.herokuapp.com/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setUserData({ name: data.name, phone: data.phone, email: data.email });
      console.log(data);
      if (!res.status == 200) {
        throw new Error(res.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  //! we are storing data in the states
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  useEffect(() => {
    userContact();
  }, []);

  // ! send the data in backend
  const sendMsg = async (e) => {
    e.preventDefault();
    // alert("Button clicked");
    const { name, email, phone, msg } = userData;
    const data = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, msg }),
    });
    const res = await data.json();
    if (!res || !data) {
      alert("msg not send");
    } else {
      setUserData({ ...userData, msg: "" });
      alert("Msg send");
    }
  };
  return (
    <>
      <section className="contact">
        <div className="contact-container">
          <div className="box">
            <img className="contactPic" src={cellphone} alt="" />
            <div>
              <h4>Phone</h4>
              <p>+917078265353</p>
            </div>
          </div>
          <div className="box">
            <img className="contactPic" src={email} alt="" />
            <div>
              <h4>Email</h4>
              <p>alamshahbaz287@gmail.com</p>
            </div>
          </div>
          <div className="box">
            <img className="contactPic" src={address} alt="" />
            <div>
              <h4>Address</h4>
              <p>Azad Nagar Moradabad-244001</p>
            </div>
          </div>
        </div>
        <div className="contact-container inputContact">
          <div className=" msgBox">
            <h1 className="contactHeading">Get in touch</h1>
            <div className="inputBox">
              <form>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={handleInput}
                  value={userData.name}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={handleInput}
                  value={userData.email}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  onChange={handleInput}
                  value={userData.phone}
                />
              </form>
              <textarea
                name="msg"
                onChange={handleInput}
                value={userData.msg}
                id=""
                placeholder="Message..."
                rows="10"
              ></textarea>
            </div>
            <button id="btnsend" onClick={sendMsg}>
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Send</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

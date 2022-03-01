import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/account.css";
import img from "./Images/logo3.png";

const Account = () => {
  const [mydata, setMydata] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    callAccount();
  }, []);
  const callAccount = async () => {
    try {
      const res = await fetch("https://itz-shahbaz.herokuapp.com/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      // console.log("my data", data);
      setMydata(data);
      if (!res.status == 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  return (
    <>
      <div className="account">
        <div className="acc-container">
          <div className="acc-box box-1">
            <div className="acc-img">
              <img src={img} alt="" />
            </div>
            <button className="btn btn-primary mx-4">Change pic</button>
          </div>
          <div className="acc-box box-2">
            <div className="user-details">
              <div className="headings">
                <hr />
                <p>User Id</p>
                <p>Name</p>
                <p>Email</p>
                <p>Phone</p>
                <p>Profession</p>
                <hr />
              </div>
              <hr />
              <div className="results">
                <hr />
                <p>{mydata._id}</p>
                <p>{mydata.name}</p>
                <p>{mydata.email}</p>
                <p>{mydata.phone}</p>
                <p>{mydata.work}</p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;

import "./App.css";
import Navbar from "./Components/Nav";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";
import Account from "./Components/Account";
import Error from "./Components/Error";
import Logout from "./Components/Logout";
import { Routes, Route } from "react-router-dom";
import { createContext, useReducer } from "react";
import { reducer, initialState } from "./Components/reducer/UseReducer";
export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/about" element={<Account />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;

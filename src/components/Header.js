import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg"; 
import ReactDOM from "react-dom";
import '../App.css';

function Header() {
  return (
    <header>
      <img src={logo} alt="LMS Logo" />
      <h1>LMS</h1>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/courses"> Courses </Link>
        <Link to="/login"> Login </Link>
      </nav>
    </header>
  );
};

export default Header;
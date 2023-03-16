import React from "react";
import "./navbar.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="top">
        <FaPhone />
        <a href="#">0509418224</a>
        <FaEnvelope />
        <a href="#">enquiry@urbansciencemep.com</a>
      </div>
      <div className="down">
        <div className="left">
          <img
            src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png"
            alt=""
          />
        </div>
        <div className="middle">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="https://sanity-cms-ivory.vercel.app/">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="right">
          <button>Enquire Now</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

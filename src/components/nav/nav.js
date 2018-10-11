import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/OAT_logo.svg";

const Nav = () => (
   <nav role="navigation" className="main-nav">
      <Link to="/">
         {" "}
         <img src={Logo} alt="OAT Home of TAO" className="oat-logo" />{" "}
      </Link>{" "}
   </nav>
);

export default Nav;

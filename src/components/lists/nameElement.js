import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// {" "} needed to make capitalize in css work on lastname
const NameElement = ({ taker }) => (
   <li className="name-element" data-letter={taker.lastName.charAt(0)}>
      <Link to={`/${taker.userId}`}>
         {" "}
         {taker.lastName} {taker.firstName}
      </Link>
   </li>
);

NameElement.propTypes = {
   taker: PropTypes.object.isRequired
};

export default NameElement;

import React from "react";
import PropTypes from "prop-types";

// {" "} needed to make capitalize in css work on lastname
const NameElement = ({ name, firstname }) => (
   <li className="name-element" data-letter={name.charAt(0)}>
      {" "}
      {name} {firstname}
   </li>
);

NameElement.propTypes = {
   name: PropTypes.string.isRequired,
   firstname: PropTypes.string.isRequired
};

export default NameElement;

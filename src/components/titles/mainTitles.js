import React from "react";
import PropTypes from "prop-types";

const Nav = ({ titleText }) => <h1 className="main-title">{titleText}</h1>;

Nav.propTypes = {
   titleText: PropTypes.string.isRequired
};

export default Nav;

import React from "react";
import PropTypes from "prop-types";

const SecondaryTitle = ({ titleText }) => <h1 className="secondary-title">{titleText}</h1>;

SecondaryTitle.propTypes = {
   titleText: PropTypes.string.isRequired
};

export default SecondaryTitle;

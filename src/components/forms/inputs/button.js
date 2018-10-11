import React from "react";
import PropTypes from "prop-types";

const FormButton = ({ buttonType, buttonText }) => (
   <button type={buttonType} className="form-button">{buttonText}</button>
);

FormButton.propTypes = {
   buttonType: PropTypes.string.isRequired,
   buttonText: PropTypes.string.isRequired
};

export default FormButton;

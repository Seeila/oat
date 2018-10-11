import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ label, inputPlaceholder, inputName }) => (
   <label>
      {label}:
      <input
         type="text"
         placeholder={inputPlaceholder}
         name={inputName}
         className="input-text"
      />
   </label>
);

TextInput.propTypes = {
   label: PropTypes.string.isRequired,
   inputPlaceholder: PropTypes.string,
   inputName: PropTypes.string.isRequired
};

export default TextInput;

import React, { Component } from "react";
import TextInput from "./inputs/textInput";
import SubmitButton from "./inputs/button";

class TestTakers extends Component {
   render() {
      return (
         <form>
            <TextInput
               label="Name"
               inputPlaceholder="Ex: Fostert"
               inputName="Name"
            />
            <TextInput
               label="Firstname"
               inputPlaceholder="Ex: Abigail"
               inputName="Firstname"
            />
            <SubmitButton buttonType="submit" buttonText="Search" />
         </form>
      );
   }
}

export default TestTakers;

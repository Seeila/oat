import React, { Component } from "react";
import MainTitle from "../components/titles/mainTitles";
import Form from "../components/forms/nameFirstnameForm";

class TestTakers extends Component {
   render() {
      return (
         <main className="test-takers">
            <section className="left-bar">
               <MainTitle titleText="Test Takers" />
               <p>Search in the list:</p>
               <Form />
            </section>
            <section className="takers-list" />
         </main>
      );
   }
}

export default TestTakers;

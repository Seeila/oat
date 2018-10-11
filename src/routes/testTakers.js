import React, { Component } from "react";
import MainTitle from "../components/titles/mainTitles";
import SecondaryTitle from "../components/titles/secondaryTitle";
import Form from "../components/forms/nameFirstnameForm";
import * as takersAPI from "../assets//data/takersAPI";

class TestTakers extends Component {
   constructor(props) {
      super(props);
      this.state = {
         testTakers: [],
         shownTakers: []
      };
   }

   componentDidMount() {
      takersAPI.getAll().then(res => {
         this.setState({ testTakers: res });
      });
   }

   render() {
      return (
         <main className="test-takers">
            <section className="left-bar">
               <MainTitle titleText="Test Takers" />
               <p>Search in the list:</p>
               <Form />
            </section>
            <section className="takers-list">
               <SecondaryTitle titleText="Takers list"/>
            </section>
         </main>
      );
   }
}

export default TestTakers;

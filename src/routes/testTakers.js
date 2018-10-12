import React, { Component } from "react";
import { Route } from "react-router-dom";
import MainTitle from "../components/titles/mainTitles";
import SecondaryTitle from "../components/titles/secondaryTitle";
import Form from "../components/forms/nameFirstnameForm";
import NameElement from "../components/lists/nameElement";
import UserProfile from "../components/profile/profile";
import * as takersAPI from "../assets//data/takersAPI";

class TestTakers extends Component {
   constructor(props, history) {
      super(props);
      this.state = {
         testTakers: [],
         shownTakers: []
      };
   }

   componentDidMount() {
      takersAPI.getAll().then(res => {
         this.setState({ testTakers: res });
         this.setState({ shownTakers: res });
      });
   }

   handleSubmit = event => {
      event.preventDefault();
      const name = event.target.Name.value.toLowerCase();
      const firstName = event.target.Firstname.value.toLowerCase();
      this.filterList(name, firstName);
   };

   filterList = (name, firstname) => {
      const queryName = new RegExp(name);
      const queryFirstname = new RegExp(firstname);
      const filteredTakers = this.state.testTakers.filter(
         taker =>
            queryName.test(taker.lastName) &&
            queryFirstname.test(taker.firstName)
      );

      this.setState({ shownTakers: filteredTakers });
   };

   render() {
      return (
         <main role="main" className="test-takers">
            <Route
               exact
               path="/"
               render={props => (
                  <section className="left-bar">
                     <MainTitle titleText="Test Takers" />
                     <p>Search in the list:</p>
                     <Form handleSubmit={this.handleSubmit} />
                  </section>
               )}
            />

            <Route
               path="/:userId"
               render={props => (
                  <section className="left-bar profile">
                     <button
                        onClick={props.history.goBack}
                        className="back-button"
                     >
                        ◀ Back
                     </button>
                     <MainTitle titleText="Test Taker" />
                     <UserProfile getTaker={takersAPI.getTaker} {...props} />
                  </section>
               )}
            />

            <section className="takers-list">
               <SecondaryTitle titleText="Takers list" />
               <ul>
                  {!this.state.shownTakers.length ? (
                     <p className="error-data">
                        Sorry we could'nt find any results please try again
                     </p>
                  ) : (
                     this.state.shownTakers.map(taker => (
                        <NameElement taker={taker} key={taker.userId} />
                     ))
                  )}
               </ul>
            </section>
         </main>
      );
   }
}

export default TestTakers;

import React, { Component } from "react";
import Nav from "./components/nav/nav";
import TestTakers from "./routes/testTakers";
import "./App.css";

class App extends Component {

   render() {
      return (
         <React.Fragment>
            <Nav />
            <TestTakers />
         </React.Fragment>
      );
   }
}

export default App;

import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Nav from './components/nav/nav';
import TestTakers from './routes/testTakers';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Nav />
      <Route exact path='/' component={TestTakers} />
      </React.Fragment>
    );
  }
}

export default App;

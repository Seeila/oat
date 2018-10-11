import React, {Component} from 'react';
import MainTitle from '../components/titles/mainTitles';


class TestTakers extends Component {
   render() {
      return (
         <main className="test-takers">
            <section className="left-bar">
               <MainTitle titleText="Test Takers" />
               <p>Search in the list:</p>
            </section>
            <section className="takers-list">
            </section>
         </main>
      );
   }
}

export default TestTakers;

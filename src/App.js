import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import CocktailsContainer from './CocktailsContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <CocktailsContainer />
            // <Route path='/' component={CocktailsContainer} />
          </React.Fragment>
        </Router>
      </div>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import CocktailsContainer from './CocktailsContainer'
import Form from './Form'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    cocktails: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/cocktails')
      .then(res => res.json())
      .then(json => {
        // console.log(json)
        this.setState({
          cocktails: json
        })
      })
  }

  render() {

    return (
      <div>
        <Router>
          <React.Fragment>
            <Route path='/api/v1/cocktails' render={(props) => <CocktailsContainer {...props} cocktails={this.state.cocktails} />} />
            <Form />
          </React.Fragment>
        </Router>
      </div>
    )
  }
}

export default App;

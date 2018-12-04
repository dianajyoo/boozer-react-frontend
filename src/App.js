import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CocktailsContainer from './CocktailsContainer'
import Form from './Form'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    cocktails: [],
    cocktailDetail: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/cocktails')
      .then(res => res.json())
      .then(json => {
        this.setState({
          cocktails: json
        })
      })
  }

  handleClick = (e, object) => {
    e.preventDefault()

    console.log('Clicked')

    fetch(`http://localhost:3000/api/v1/cocktails/${object.id}`)
      .then(res => res.json())
      .then(json => {
        // console.log(json.proportions)

        this.setState({
          cocktailDetail: json.proportions
        })
      })
  }

  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <Route
              path='/api/v1/cocktails'
              render={(props) => <CocktailsContainer {...props}
              cocktails={this.state.cocktails}
              cocktailDetail={this.state.cocktailDetail}
              handleClick={this.handleClick}
              />} />
            <Form />
          </React.Fragment>
        </Router>
      </div>
    )
  }
}

export default App;

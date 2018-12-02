import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default class CocktailCard extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {this.props.cocktail.name}
        </div>
      </Router>
    )
  }
}

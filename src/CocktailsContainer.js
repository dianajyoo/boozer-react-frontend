import React from 'react'
import CocktailCard from './CocktailCard'
import { NavLink } from 'react-router-dom'

export default class CocktailsContainer extends React.Component {

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
        <ul>
          {this.state.cocktails.map(cocktail => (
            <li className='nav-list'>
            <NavLink
              to={`/api/v1/cocktails/${cocktail.id}`}
              >{cocktail.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    )
  }

}

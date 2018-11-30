import React from 'react'

export default class CocktailCard extends React.Component {
  render() {
    return (
      <div>
        {this.props.cocktail.name}
      </div>
    )
  }
}

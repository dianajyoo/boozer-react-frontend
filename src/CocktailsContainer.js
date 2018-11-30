import React from 'react'
import CocktailCard from './CocktailCard'

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
    const cocktailArray = this.state.cocktails.map(cocktail => {
      return <CocktailCard key={cocktail.id} cocktail={cocktail} />
    })

    return (
      <div>
        {cocktailArray}
      </div>
    )
  }

}

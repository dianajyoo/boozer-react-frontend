import React from 'react'

const CocktailCard = ({match, cocktail}) => {

  return (
    cocktail.id === parseInt(match.params.cocktailId) ? (<div>
      <h1>{cocktail.name}</h1>
      <h2>{cocktail.description}</h2>
    </div>) : null
  )

}

export default CocktailCard

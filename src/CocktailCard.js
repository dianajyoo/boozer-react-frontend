import React from 'react'

const CocktailCard = ({match, cocktail}) => {

  return (
    cocktail.id === parseInt(match.params.cocktailId) ? (<div className='card'>
      <h1>{cocktail.name}</h1>
      <h3>{cocktail.description}</h3>
    </div>) : null
  )

}

export default CocktailCard

import React from 'react'

const CocktailCard = ({match, cocktail, cocktailDetail}) => {

  const detailArray = cocktailDetail.map(detail => (<li>{detail.ingredient_name}</li>))

  return (
    cocktail.id === parseInt(match.params.cocktailId) ? (<div className='card'>
      <h1>{cocktail.name}</h1>
      <h3>{cocktail.description}</h3>
      <h3>Ingredients</h3>
      <ul>{detailArray}</ul>
    </div>) : null
  )

}

export default CocktailCard

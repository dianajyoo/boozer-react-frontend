import React from 'react'
import { NavLink } from 'react-router-dom'

const CocktailsList = ({cocktails, handleClick}) => {
  const renderCocktails = cocktails.map(cocktail => (
    <li onClick={e => handleClick(e, cocktail)}>
      <NavLink
        key={cocktail.id}
        to={`/api/v1/cocktails/${cocktail.id}`
      }>{cocktail.name}</NavLink></li>
    )
  )

  return (
    <div className='list'>
      <ul>
        {renderCocktails}
      </ul>
    </div>
  )
}

export default CocktailsList

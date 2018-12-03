import React from 'react'
import CocktailsList from './CocktailsList'
import CocktailCard from './CocktailCard'
import { Route } from 'react-router-dom'

// pass down props to CocktailsList + Card component
const CocktailsContainer = ({match, cocktails, cocktailDetail, handleClick}) => (
  <div>
    <Route path={`${match.url}`} render={(props) => <CocktailsList {...props} cocktails={cocktails} handleClick={handleClick} />} />

    {cocktails.map(cocktail => (
      <Route path={`${match.url}/:cocktailId`} render={(props) => <CocktailCard {...props} cocktail={cocktail} cocktailDetail={cocktailDetail} />} />
    ))}
  </div>
)

export default CocktailsContainer

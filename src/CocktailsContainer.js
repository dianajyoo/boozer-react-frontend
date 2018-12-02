import React from 'react'
import CocktailsList from './CocktailsList'
import CocktailCard from './CocktailCard'
import { Route, NavLink } from 'react-router-dom'

// pass down props to CocktailsList component
const CocktailsContainer = ({match, cocktails}) => (
  <div>
    <Route path={`${match.url}`} render={(props) => <CocktailsList {...props} cocktails={cocktails} />} />
    <Route path={`${match.url}/:cocktailId`} render={(props) => <CocktailCard {...props} cocktails={cocktails} />} />
  </div>
)

export default CocktailsContainer

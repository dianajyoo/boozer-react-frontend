import React from 'react'

const InputForm = (props) => {
  return (
    <div>
      <form onSubmit={e => props.handleProportionSubmit(e)}>
        <input
          type='text'
          name='ingredient_name'
          placeholder='Ingredient Name'
          value={props.ingredient}
          onChange={e => props.handleChange(e)} />
        <input
          type='text'
          name='amount'
          placeholder='Quantity'
          value={props.amount}
          onChange={e => props.handleChange(e)} />

        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default InputForm

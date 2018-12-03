import React from 'react'

const InputForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleProportionSubmit}>
        <input
          type='text'
          name='proportions'
          placeholder='Ingredient Name'
          value={props.ingredient}
          onChange={props.handleChange} />
        <input
          type='text'
          name='amount'
          placeholder='Quantity'
          value={props.amount}
          onChange={props.handleChange} />

        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default InputForm

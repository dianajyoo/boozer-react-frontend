import React from 'react'

const InputForm = (props) => {
  return (
    <div>
      <form className='ui form' onSubmit={e => props.handleProportionSubmit(e)}>
        <div className='field'>
          <input
            type='text'
            name='ingredient_name'
            placeholder='Ingredient Name'
            value={props.ingredient}
            onChange={e => props.handleChange(e)} />
          </div>
        <div className='field'>
          <input
            type='text'
            name='amount'
            placeholder='Quantity'
            value={props.amount}
            onChange={e => props.handleChange(e)} />
        </div>

        <button className='ui button' type='button'>Submit</button>
      </form>
    </div>
  )
}

export default InputForm

import React from 'react'

const Form = (props) => {
  return (
    <div className='form'>
      <h2>Create a Cocktail</h2>
      <form>
        <input type='text' name='name' placeholder='Name' /><br />
        <input type='text' name='description' placeholder='Description' /><br />
        <input type='text' name='instructions' placeholder='Instruction' /><br />

        <input type='submit' />
      </form>
    </div>
  )
}

export default Form

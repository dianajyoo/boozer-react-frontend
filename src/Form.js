import React from 'react'

class Form extends React.Component {

  state = {
    name: '',
    description: '',
    instructions: ''
  }

  submitHandler = (e) => {
    fetch('http://localhost:3000/api/v1/cocktails', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(json => this.setState({
        [e.target.name]: e.target.value
      }))
  }

  render() {
    return (
      <div className='form'>
        <h2>Create a Cocktail</h2>
        <form onSubmit={(e) => this.submitHandler(e)}>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={this.state.name} /><br />
          <input
            type='text'
            name='description'
            placeholder='Description'
            value={this.state.description} /><br />
          <input
            type='text'
            name='instructions'
            placeholder='Instruction'
            value={this.state.instructions} /><br />

          <input type='submit' value='Create Cocktail' />
        </form>
      </div>
    )
  }
}

export default Form

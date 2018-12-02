import React from 'react'

class Form extends React.Component {

  state = {
    name: '',
    description: '',
    instructions: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/api/v1/cocktails', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
  }

  handleChange = (e) => {
    console.log(e.target.value)

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className='form'>
        <h2>Create a Cocktail</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={this.state.name}
            onChange={this.handleChange} /><br />
          <input
            type='text'
            name='description'
            placeholder='Description'
            value={this.state.description}
            onChange={this.handleChange} /><br />
          <input
            type='text'
            name='instructions'
            placeholder='Instruction'
            value={this.state.instructions}
            onChange={this.handleChange} /><br />

          <input type='submit' value='Create Cocktail' />
        </form>
      </div>
    )
  }
}

export default Form

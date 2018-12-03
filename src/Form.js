import React from 'react'
import InputForm from './InputForm'

class Form extends React.Component {

  state = {
    cocktailId: '',
    counter: [],
    name: '',
    description: '',
    instructions: '',
    proportions: [{
      ingredient_name: '',
      amount: ''
    }]
  }

  handleChange = (e) => {
    // console.log(e.target.value)

    if (e.target.name !== 'proportions') {
      this.setState({
        [e.target.name]: e.target.value
      })
    } else {
      this.setState({
        proportions: [{
          ingredient_name: e.target.value,
          amount: e.target.value
        }]
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // debugger
    console.log('Clicked')

    fetch('http://localhost:3000/api/v1/cocktails', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        description: this.state.description,
        instructions: this.state.instructions
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({
          cocktailId: json.id
        })
      })

  }

  handleProportionSubmit = (e) => {
    e.preventDefault()
    console.log('Made it here')
    console.log(this.state.cocktailId)

    fetch(`http://localhost:3000/api/v1/cocktails/${this.state.cocktailId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        proportions: [{
          ingredient_name: this.state.proportions.ingredient_name,
          amount: this.state.proportions.amount
          }]
        })
      })
    }

  handleAddButton = () => {
    this.setState({
      counter: [...this.state.counter, {name: ''}]
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
            placeholder='Instructions'
            value={this.state.instructions}
            onChange={this.handleChange} /><br />

          <input type='submit' value='Create Cocktail' />
        </form>

        <h2>Proportions</h2>
        <InputForm handleProportionSubmit={this.handleProportionSubmit} ingredient={this.state.proportions.ingredient_name} amount={this.state.proportions.amount} onChange={this.handleChange} handleAddButton={this.handleAddButton} />
        {this.state.counter.map(proportion => <InputForm handleProportionSubmit={this.handleProportionSubmit} ingredient={this.state.proportions.ingredient_name} amount={this.state.proportions.amount} onChange={this.handleChange} handleAddButton={this.handleAddButton} />)}
        <button onClick={this.handleAddButton}>Add</button>

      </div>
    )
  }
}

export default Form

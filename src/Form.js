import React from 'react'
import InputForm from './InputForm'

class Form extends React.Component {

  state = {
    counter: [],
    name: '',
    description: '',
    instructions: '',
    ingredient_name: '',
    amount: '',
    proportions: []
  }

  handleChange = (e) => {
    console.log(e.target)

    if (e.target.name === 'ingredient_name') {
      this.setState({
        ingredient_name: e.target.value
      })
    } else if (e.target.name === 'amount') {
      this.setState({
        amount: e.target.value
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  }

  handleSubmit = (e, object) => {
    e.preventDefault()
    // debugger
    console.log(object)

    fetch('http://localhost:3000/api/v1/cocktails', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name: object.name,
        description: object.description,
        instructions: object.instructions
      })
    })
      .then(res => res.json())
      .then(json => this.handleIngredientSubmit(json, object))

  }

  handleIngredientSubmit = (newCocktail, object) => {

    let ingredient_url = "http://localhost:3000/api/v1/ingredients"

    console.log(object)

    fetch(ingredient_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        name: object.ingredient_name
        })
      })
      .then(res => res.json())
      .then(json => this.handleProportionSubmit(json, newCocktail, object))
    }

    handleProportionSubmit = (newIngredient, newCocktail, object) => {

      console.log('Made it here')

      // console.log(object)

      let proportion_url = "http://localhost:3000/api/v1/proportions"

      fetch(proportion_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json'
        },
        body: JSON.stringify({
          cocktail_id: newCocktail.id,
          ingredient_id: newIngredient.id,
          amount: object.amount
          })
        })
        .then(res => res.json())
        .then(json => this.props.addNewCocktail(json, newIngredient, newCocktail, object))
        // to pass a cb fn from parent to trigger rerender/ setState
      }

  handleAddButton = () => {
    this.setState({
      counter: [...this.state.counter, {name: ''}],
      proportions: [...this.state.proportions, {ingredient_name: this.state.ingredient_name, amount: this.state.amount}]
    })
  }

  render() {
    console.log(this.state.interval)
    return (
      <div className='form'>
        <h2>Create a Cocktail</h2>
        <form className='ui form' onSubmit={e => this.handleSubmit(e, this.state)}>
          <div className='field'>
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={this.state.name}
              onChange={e => this.handleChange(e)} /><br />
            </div>
          <div className='field'>
            <input
              type='text'
              name='description'
              placeholder='Description'
              value={this.state.description}
              onChange={e => this.handleChange(e)} /><br />
            </div>
          <div className='field'>
            <input
              type='text'
              name='instructions'
              placeholder='Instructions'
              value={this.state.instructions}
              onChange={e => this.handleChange(e)} /><br />
          </div>

          <input className='ui button' type='submit' value='Create Cocktail' />
        </form>

        <h2>Proportions</h2>
        <InputForm handleProportionSubmit={this.handleProportionSubmit} ingredient={this.state.ingredient_name} amount={this.state.amount} handleChange={this.handleChange} handleAddButton={this.handleAddButton} />

        {this.state.counter.map(proportion => <InputForm handleProportionSubmit={e => this.handleProportionSubmit(e)} ingredient={this.state.ingredient_name} amount={this.state.amount} handleChange={this.handleChange} handleAddButton={this.handleAddButton} />)}

        <button id='add-btn' className='ui button' onClick={this.handleAddButton}>Add</button>

      </div>
    )
  }

}

export default Form

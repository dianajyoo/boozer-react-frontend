import React from 'react'
import InputForm from './InputForm'

class Form extends React.Component {

  state = {
    cocktailId: '',
    counter: [],
    name: '',
    description: '',
    instructions: '',
    ingredient_name: '',
    amount: '',
    proportions: []
  }

  handleChange = (e) => {
    // console.log(e.target.value)

    if (e.target.name === 'ingredient_name') {
      console.log("Made it Here")
      this.setState({
        ingredient_name: e.target.value,
        proportions: [{ingredient_name: e.target.value, amount: this.state.amount}]
      })
    } else if (e.target.name === 'amount') {
      this.setState({
        amount: e.target.value,
        proportions: [{ingredient_name: this.state.ingredient_name, amount: e.target.value}]
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
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
    console.log(this.state.proportions)

    let newProportions = [...this.state.proportions]
    let url = "http://localhost:3000/api/v1/cocktails" + "/" + this.state.cocktailId
    // debugger

    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        proportions: this.state.proportions
        // name: "This cocktail"
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
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={this.state.name}
            onChange={e => this.handleChange(e)} /><br />
          <input
            type='text'
            name='description'
            placeholder='Description'
            value={this.state.description}
            onChange={e => this.handleChange(e)} /><br />
          <input
            type='text'
            name='instructions'
            placeholder='Instructions'
            value={this.state.instructions}
            onChange={e => this.handleChange(e)} /><br />

          <input type='submit' value='Create Cocktail' />
        </form>

        <h2>Proportions</h2>
        <InputForm handleProportionSubmit={this.handleProportionSubmit} ingredient={this.state.ingredient_name} amount={this.state.amount} handleChange={this.handleChange} handleAddButton={this.handleAddButton} />

        {this.state.counter.map(proportion => <InputForm handleProportionSubmit={this.handleProportionSubmit} ingredient={this.state.ingredient_name} amount={this.state.amount} handleChange={this.handleChange} handleAddButton={this.handleAddButton} />)}
        <button onClick={this.handleAddButton}>Add</button>

      </div>
    )
  }
}

export default Form

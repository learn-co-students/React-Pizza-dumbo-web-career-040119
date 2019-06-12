import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzas: [],
    topping: "",
    size: "small",
    vegetarian: false,
    pizzaToEdit: null
  }

  editPie = (pizza) => {
    this.setState({
      pizzaToEdit: pizza,
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    let foundZa = this.state.pizzas.find(pizza => pizza.id === this.state.pizzaToEdit.id)

    foundZa.topping = this.state.topping
    foundZa.size = this.state.size
    foundZa.vegetarian = this.state.vegetarian

    let updatedPizzas = this.state.pizzas.map(pizza => {
      if (pizza.id === this.state.pizzaToEdit.id) {
        return foundZa
      } else {
        return pizza
      }
    })

    this.setState({
      pizzas: updatedPizzas
    })
  }


  render() {
    console.log(this.state)
    return (
      <Fragment>
        <Header/>
        {this.state.pizzaToEdit ?
          <PizzaForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          topping={this.state.topping}
          size={this.state.size}
          vegetarian={this.state.vegetarian}
          />
          :
          null
        }
        <PizzaList editPie={this.editPie} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }

  componentDidMount(){
   fetch("http://localhost:3000/pizzas")
   .then(res => res.json())
   .then(data => this.setState({pizzas: data}))
 }

}

export default App;

import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    topping: "",
    size: "Small",
    vegetarian: false,
    pizzaToEdit: null
  }

  handleChange = (event) => {
    if(event.target.name === "vegetarian") {
      this.setState({
        vegetarian: true
      })
    } else if(event.target.name === "not-vegetarian"){
      this.setState({
        vegetarian: false
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  handleSubmit = () => {
    //find the target pizza
    const foundPizza = {...this.state.pizzas.find(pizza => pizza.id === this.state.pizzaToEdit)}

    //update its values
    foundPizza.topping = this.state.topping
    foundPizza.size = this.state.size
    foundPizza.vegetarian = this.state.vegetarian

    //create copy with updated target pizza
    const updatedPizzas = this.state.pizzas.map(pizza => {
      if (pizza.id === this.state.pizzaToEdit){
        return foundPizza
      } else {
        return pizza
      }
    })

    //setState
    this.setState({
      pizzas: updatedPizzas
    })
  }

  clickPizza = (pizza) => {
    this.setState({
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian,
      pizzaToEdit: pizza.id
    })
  }

  // handleRadioButton = (event) => {
  //   this.setState({
  //     vegetarian: 
  //   })
  // }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(data => this.setState({pizzas: data}))
  }


  render() {
    console.log(this.state)
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          topping={this.state.topping} 
          size={this.state.size} 
          vegetarian={this.state.vegetarian} 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <PizzaList clickPizza={this.clickPizza} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;

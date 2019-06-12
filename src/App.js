import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const API = "http://localhost:3000/pizzas"

class App extends Component {

  state = {
    pizzas: [],
    pizzaFormShow: false,
    pizzaToEdit: {},
    vegetarian: null,
    topping: "",
    size: ""
  }

  fetchPizzas() {
    return fetch(API)
    .then(res => res.json())
    .then(pizzas =>
    this.setState({
      pizzas: pizzas
    }))
  }

  componentDidMount() {
    this.fetchPizzas()
  }

  pizzaFormShow = (pizza) => {
    return this.setState({
      pizzaToEdit: pizza,
      pizzaFormShow: true,
    })
  }

  saveChange = (event) => {
    console.log(event.target.name, event.target.value)
    if(event.target.name === "Vegetarian") {
      this.setState({
        vegetarian: true
      })
    } else if(event.target.name === "Not-Vegetarian"){
      this.setState({
        vegetarian: false
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  editPizza = (event, pizza) => {
    console.log(event, pizza, this.state)
    return fetch(API + `/${pizza.id}`, {
      method: "PATCH",
      mode: 'cors',
      headers: {
            'Content-Type': 'application/json'},
      body: JSON.stringify({
        vegetarian: this.state.vegetarian,
        topping: this.state.topping,
        size: this.state.size
      })
    })
    .then(res => res.json())
    .then(this.setState({
      pizzaFormShow: false,
      pizzaToEdit: {},
      vegetarian: null,
      topping: "",
      size: ""
    }))
  }

  // how to re-render after PATCH
  // why doesn't it show my typing or remember

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm show={this.state.pizzaFormShow} pizza={this.state.pizzaToEdit} editPizza={this.editPizza} saveChange={this.saveChange}/>
        <PizzaList pizzas={this.state.pizzas} pizzaFormShow={this.pizzaFormShow}/>
      </Fragment>
    );
  }
}

export default App;

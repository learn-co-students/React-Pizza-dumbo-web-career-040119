import React from "react"

const Pizza = ({pizza, pizzaFormShow}) => {

  return(
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size} </td>
      <td>{pizza.vegetarian ? "🌱" : "💔"}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => pizzaFormShow(pizza)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza

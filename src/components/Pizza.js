import React from "react"

const Pizza = ({ pizza, clickPizza }) => {
  return(
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? "Yes" : "No"}</td>
      <td><button type="button" onClick={() => clickPizza(pizza)} className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza

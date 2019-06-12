import React from "react"

const PizzaForm = ({show, pizza, editPizza, saveChange}) => {
  if (show === true) {
    return(
        <div className="form-row">
          <div className="col-5">
              <input type="text" name="topping" className="form-control" placeholder={pizza.topping} default={pizza.topping}
              onChange={saveChange}/>
          </div>
          <div className="col">
            <select default={pizza.size} className="form-control" name="size" onChange={saveChange}>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Vegetarian" onChange={saveChange} name="Vegetarian" checked={null}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" onChange={saveChange} name="Not-Vegetarian" value="Not Vegetarian" checked={null}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={(event) => editPizza(event, pizza)}>Submit</button>
          </div>
        </div>

    )} else {
      return null
    }
}

export default PizzaForm

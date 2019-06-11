import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input name="topping" onChange={props.handleChange} type="text" className="form-control" placeholder="Pizza Topping" value={
                props.topping
              }/>
        </div>
        <div className="col">
          <select onChange={props.handleChange} name="size" value={props.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" name="vegetarian" type="radio" onChange={props.handleChange} value={true} checked={props.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input"  name="not-vegetarian" type="radio" onChange={props.handleChange} value={false} checked={!props.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm

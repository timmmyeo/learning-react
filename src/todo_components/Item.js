import React from "react"


function Item(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration:"line-through"
  }
  
  return (
    
    <div>
    <label class="container"><p style={props.todo.completed ? completedStyle : null}>{props.todo.text}</p>
      <input onChange={() => props.handleChange(props.id)} type="checkbox" checked={props.todo.completed}/>
      <span class="checkmark"></span>
    </label>
    <hr></hr>
    </div>
  )
}

export default Item
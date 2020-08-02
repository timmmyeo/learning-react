import React from "react"


function Item(props) {
  return (
    <div>
    <label class="container">{props.todo.text}
      <input onChange={() => props.handleChange(props.id)} type="checkbox" checked={props.todo.completed}/>
      <span class="checkmark"></span>
    </label>
    <hr></hr>
    </div>
  )
}

export default Item
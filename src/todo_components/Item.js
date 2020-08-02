import React from "react"


function Item(props) {
  return (
    <div>
    <label class="container">{props.todo.text}
      <input onChange={() => console.log("Changed?")} type="checkbox" checked={props.todo.completed}/>
      <span class="checkmark"></span>
    </label>
    <hr></hr>
    </div>
  )
}

export default Item
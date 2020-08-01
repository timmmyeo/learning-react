import React from "react"
import ReactDOM from "react-dom"

// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

function MyInfo() {
  return (
  <div>
    <h1>My name is Tim</h1>
    <p>This is a test paragraph</p>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  </div> 
  )
}

ReactDOM.render(<MyInfo />,document.getElementById("root")
);
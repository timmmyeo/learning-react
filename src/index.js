import React from "react"
import ReactDOM from "react-dom"

// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

function MyApp() {
  return (
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul> 
  )
}

ReactDOM.render(<MyApp />,document.getElementById("root")
);
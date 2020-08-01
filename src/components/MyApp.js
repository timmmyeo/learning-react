import React from "react"
import Item from "./Item"
import Header from "./Header"

// function MyApp() {
//   return (
//     <div>
//       <Header />
//       <Item />
//     </div>
    
//   )
// }

function MyApp() {
  const date = new Date();
  let hours = date.getHours();
  hours = hours % 12;

  return (
    <h1>The time right now is {hours} O'Clock.</h1>
  )
}

export default MyApp
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
  const hours = date.getHours();
  let timeOfDay
  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return (
    <h1>It is currently {timeOfDay}.</h1>
  )
}

export default MyApp
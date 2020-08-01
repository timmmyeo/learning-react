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
  const styling = {
    color: "#FF8C00",
    backgroundColor: "#FF2D80"
  }
  
  if (hours < 12) {
    timeOfDay = "morning";
    styling.color = "#04756F";
  } else if (hours < 17) {
    timeOfDay = "afternoon";
    styling.color = "#2E0727";
  } else {
    timeOfDay = "night";
    styling.color = "#D90000";
  }


  return (
    <h1 style={styling}>It is currently {timeOfDay}.</h1>
  )
}

export default MyApp
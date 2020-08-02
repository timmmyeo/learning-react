/*

Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug

*/

import React from "react"

class App extends React.Component {
  render() {
    return (
      <div>
          <Header username="Tim"/>
          <Greeting username="Tim"/>
      </div>
      )
  }
}

// // #1
// function App() {
//     return (
//         <div>
//             <Header />
//             <Greeting />
//         </div>
//     )
// }

class Header extends React.Component {
  render() {
        return (
        <header>
            <h1>Welcome, {this.props.username}!</h1>
        </header>
         )
  }
}

// // #2
// function Header(props) {
//     return (
//         <header>
//             <p>Welcome, {props.username}!</p>
//         </header>
//     )
// }

class Greeting extends React.Component {
  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    return (
        <h2>Good {timeOfDay} to you, {this.props.username}!</h2>
    )
  }
}

// // #3
// function Greeting() {
//   const date = new Date()
//   const hours = date.getHours()
//   let timeOfDay
  
//   if (hours < 12) {
//       timeOfDay = "morning"
//   } else if (hours >= 12 && hours < 17) {
//       timeOfDay = "afternoon"
//   } else {
//       timeOfDay = "night"
//   }
//   return (
//       <h1>Good {timeOfDay} to you, sir or madam!</h1>
//   )
// }

export default App 
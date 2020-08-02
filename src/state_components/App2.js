import React from "react"

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

class App2 extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
  }
  render() {
    const loggedInText = this.state.isLoggedIn ? "in" : "out"
    return (
      <div>
          <h1>You are currently logged {loggedInText}</h1>
      </div>
      )
  }
}


export default App2

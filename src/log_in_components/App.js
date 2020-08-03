import React from "react"
import Button from "./Button"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      prevState.isLoggedIn = !prevState.isLoggedIn;
      return prevState;
    })
  }

  render() {
    const logInText = this.state.isLoggedIn ?
    "You are logged in!" :
    "You are logged out!"
    
    return (
      <div>
        <h1>{logInText}</h1>
        <Button handleClick={this.handleClick} />
      </div>
    )

  }
}

export default App 
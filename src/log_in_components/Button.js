import React from "react"

class Button extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <button onClick={this.props.handleClick}>Log in / Log out</button>
    )
  }
}
export default Button
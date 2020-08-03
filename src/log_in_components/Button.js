import React from "react"

class Button extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <button onClick={this.props.handleClick}>{this.props.buttonText}</button>
    )
  }
}
export default Button
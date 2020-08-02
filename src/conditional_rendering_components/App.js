import React from "react"
import ConditionalComponent from "./ConditionalComponent"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(
        {
          isLoading: false
        })}, 1500)
  }

  render() {
    return (
      this.state.isLoading ?
      <h1>Loading...</h1>:
      <ConditionalComponent />
    )
  }
}

export default App
import React from "react"
import Item from "./Item"
import Header from "./Header"
import todosData from "./todosData"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todoList: todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.state.todoList

  }

  render() {
    const todoList = this.state.todoList.map(todo => <Item id={todo.id} todo={todo}/>)
    return (
      <div>
        <Header />
        {todoList}
      </div>
    )
  }
}

export default App
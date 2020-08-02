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
    this.setState(prevState => {
      const updatedTodos = prevState.todoList.map(todo => {
        if (id === todo.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
      return {todoList: updatedTodos}
    })
  }

  render() {
    const todoList = this.state.todoList.map(todo => <Item id={todo.id} todo={todo} handleChange={this.handleChange}/>)
    return (
      <div>
        <Header />
        {todoList}
      </div>
    )
  }
}

export default App
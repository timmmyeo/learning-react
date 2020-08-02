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

// function App() {
//   const todoList = todosData.map(todo => <Item id={todo.id} todo={todo}/>)
//   return (
//     <div>
//       <Header />
//       {todoList}
//     </div>
    
//   )
// }

export default App
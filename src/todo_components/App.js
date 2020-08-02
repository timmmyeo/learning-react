import React from "react"
import Item from "./Item"
import Header from "./Header"
import todosData from "./todosData"

function MyApp() {
  const todoList = todosData.map(todo => <Item id={todo.id} todo={todo}/>)
  return (
    <div>
      <Header />
      {todoList}
    </div>
    
  )
}

export default MyApp
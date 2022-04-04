import React from 'react'
import Todo from './Todo'

function Todolist({todos,SetTodos, filteredTodos}) {

  

  return (
    <div className="todo-container">
      <ul className="todo-list">
      {filteredTodos.map(todo => (
        <Todo todos={todos} SetTodos={SetTodos} key={todo.id}  todo={todo} text={todo.text}/>
      ))}
      </ul>
    </div>
  )
}

export default Todolist
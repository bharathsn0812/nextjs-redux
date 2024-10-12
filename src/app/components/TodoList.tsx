'use client'

import { useSelector, useDispatch } from 'react-redux'
import { addTodo, toggleTodo, removeTodo } from '../features/todos/todosSlice'
import { useState } from 'react'
import { RootState, AppDispatch } from '../store'

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch<AppDispatch>()
  const [newTodo, setNewTodo] = useState('')

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo))
      setNewTodo('')
    }
  }

  return (
    <div>
      <h1>Todo List using Redux in NextJS 14</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
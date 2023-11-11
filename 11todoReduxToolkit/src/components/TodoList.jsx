import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeTodo } from '../features/todoSlice'


function TodoList() {
    const dispatch=useDispatch()
    const todos=useSelector(state=>state.todos)
  return (
    <>
        <ul>
            {
                todos.map(todo=>(
                    
                    <li style={{listStyle:'none'}} key={todo.id}> {todo.todo}
                    <button
                        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                        
                    >
                        "✏️"
                    </button>
                     <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button></li>
                ))
            }
        </ul>
    </>
  )
}

export default TodoList
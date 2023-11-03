import { useEffect, useState } from 'react'
import { TodoForm,TodoItem } from './components'
import './App.css'
import { TodoContextProvider } from './contexts'

function App() {
  const [todos,setTodos]=useState([])

  const addTodo=(todo)=>{
    setTodos(prev=>[
      ...prev,
      {
        id: Date.now(),
        ...todo

      }
    ])
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter(
      prev=>prev.id!==id//Filter and return todos whose id do not match with the id passed in
    ))
  }
  const updateTodo=(id,todo)=>{
    setTodos(prev=>
      prev.map((prevTodo)=>(prevTodo.id===id)? todo: prevTodo)
    )
  }

  const toggleComplete=(id)=>{
    setTodos(prev=>
      prev.map((prevTodo)=>(prevTodo.id===id)? {...prevTodo,completed: !prevTodo.completed}: prevTodo)
    )
  }

  useEffect(()=>{
    const todoItems=JSON.parse(localStorage.getItem("todos"))
    if(todoItems && todoItems.length>0){
      setTodos((prev)=>todoItems)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <TodoContextProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              <TodoForm></TodoForm>
          </div>
          <div className="flex flex-wrap gap-y-3">
              {
                todos.map(
                  existingTodo=>{

                    return(<div  key={existingTodo.id} className="w-full"><TodoItem todo={existingTodo}/></div>)
                  }
                )
              }
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App

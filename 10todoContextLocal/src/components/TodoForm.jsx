import { useTodo } from "../contexts";
import { useState } from "react";

function TodoForm() {
    const {addTodo}=useTodo()

    const handleAdding=(e)=>{
        e.preventDefault();
        addTodo({todo: todo,completed: false})
        setTodo("")
    }

    const [todo,setTodo]=useState("")

    return (
        <form  className="flex">
            <input
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" onClick={handleAdding} className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


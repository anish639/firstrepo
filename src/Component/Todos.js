import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { removeTodo } from '../Feature/TodoSlice'
const Todos = () => {
    const todos = useSelector((state)=>state.todos)
    const dispatch = useDispatch()
    console.log(todos)
    const handleDelete = (id) =>{
       dispatch(removeTodo(id))
    }
  return (
    <>
    <div>Todos</div>
    {todos.map((item)=>{
        return(
            <>
            <h1>{item.text}</h1>
            <button
            onClick={()=>{handleDelete(item.id)}}
            >Delete</button>
            </>
        )
    })}
    </>
  )
}

export default Todos
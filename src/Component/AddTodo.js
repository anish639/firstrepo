import React, { useState } from 'react'
import { addTodo } from '../Feature/TodoSlice'
import { useDispatch } from 'react-redux'
const AddTodo = () => {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
        console.log('subit')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
        placeholder='Add Todos'
        type='text'
        onChange={(e)=>setInput(e.target.value)}
        value={input}
        />
        <button type='submit'>Submit</button> 
        </form>
       
    </div>
  )
}

export default AddTodo
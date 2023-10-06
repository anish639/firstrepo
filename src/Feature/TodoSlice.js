import {createSlice ,nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos:[{
        id:1,
        text:'hellow',
        time:''
    }]
}

export const TodoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo)
        },

        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>{
              return todo.id !== action.payload
            })
        }
    }
})

export const {addTodo,removeTodo} = TodoSlice.actions
export default TodoSlice.reducer
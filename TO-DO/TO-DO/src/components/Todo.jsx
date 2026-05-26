import {useSelector} from "react-redux"
import { nanoid} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import "./Todo.css"
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

export default function Todo(){
    const dispatch = useDispatch();

    const todoList = useSelector((state) =>{
        return state.todos;
        // returns the todo list
    })
    console.log(todoList);



let deleteHandler = (id)=>{
        console.log(id);
        dispatch(deleteTodo(id));
        
}
let DoneHandler = (id)=>{
        console.log(id);
        dispatch(markAsDone(id));
        
}
    



    return (
    
    <>
    <h3>this is a todo made using react and redux</h3>

    <ul >
        {todoList.map((todo) => { 
            return (
                 <li key={todo.id} style ={{color : todo.isDone ? "green" : "white"}} >
                    {todo.task}   <button onClick={() => deleteHandler(todo.id)}>Delete</button>  <button onClick={() => DoneHandler(todo.id)}>Done ?</button>
                </li>
             
             )

    }
                     
        )}
    </ul>

   
    </>
    )

}

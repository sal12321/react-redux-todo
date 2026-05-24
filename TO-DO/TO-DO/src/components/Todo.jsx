import {useSelector} from "react-redux"
import { nanoid} from "@reduxjs/toolkit" ;
import "./Todo.css"

export default function Todo(){
    console.log("this is todo comp")

    const todoList = useSelector((state) =>{
        return state.todos;
    })
    console.log(todoList)

    return (
    
    <>
    <h3>this is a fucking todo</h3>

    <ul >
        {todoList.map((todo) => { 
            return ( <li key = {nanoid()} > {todo.task} </li> )

    }
                     
        )}
    </ul>

   
    </>
    )

}

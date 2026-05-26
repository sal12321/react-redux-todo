import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function(){
    const[task, setTask] = useState("");
    const dispatch = useDispatch();




    let update = (e) =>{
    console.log(e.target.value);
    setTask(e.target.value); 
}

let submitHandler = (e)=> { 
        e.preventDefault();
        console.log(task);
        if(task === "" ) {
            
            return;
        }
        
        // this has to be sent to reducer and that will add to the todo list

        dispatch(addTodo(task));
        console.log("task is added")
        setTask("");

}
    




    return(
        <>
        <form action="" onSubmit={submitHandler}>
            <input 
            type="text" 
            placeholder="Type your todo"
            onChange={update}
            value = {task}
            > 

            </input>
            <button>Add Task</button>
        </form>
        </>
    )
}


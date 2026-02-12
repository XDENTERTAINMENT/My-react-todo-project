import React from 'react'
import TodoItem from "./TodoItem";



function Todolist(props) {
  return (
        <ul  className='list-group my-s'>
       <h3  className='text-capitalize  text-center' >

       {props.todoItems.map((todoItem) =>
       {
                 return <TodoItem
                  handleDelete={()=>props.handleDelete(todoItem.id)}
                 title={todoItem.items}
                  key={todoItem.id}
                  edithandle={()=>props. edithandle(todoItem.id)}/>
       } )}
       
       </h3>

       


        <button  type="button" 
         className="btn btn-danger w-100 mt-4"
        onClick={props.clear}
         >  Clear list</button>
   </ul>

  
  )
}

export default Todolist;

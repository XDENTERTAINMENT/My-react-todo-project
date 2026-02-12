import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Todoinput from "./components/TodoInput";
import Todolist from "./components/TodoList";
import { useState } from "react";

function App() 
{

    const [items , setItems]  = useState(``);
    const [id  ,  setId ]    = useState(0);
    const [ todoItems, setTodoItems] = useState([]);
    const [ editItems, setEditItems] = useState(false)
    

        const handleEdit = (id) => {
        const selectedItem = todoItems.find(item => item.id === id);
        const  deleteItem  = todoItems.filter((item) => item.id !==id)
        
            setTodoItems(deleteItem);                              // remember which item to edit
           setItems(selectedItem.items); // put text back in input
            setEditItems(true);           // switch to edit mode
           setId(id); 


           
            };

     const handleDelete=(id)=> 
        {
             setTodoItems(todoItems.filter((item) => item.id !==id));           

        }

     const handleclear=()=>
        {  
         
          setTodoItems([])

     }


    const handleChange= (e) =>
        {
            setItems(e.target.value);
        }


        const handleSubmit = (e) => 
            {
               e.preventDefault();
               

               const newItem = {

                id:id,
              
                items : items,

               }

              
                setTodoItems(prevItems => [...prevItems, newItem]);
                setId(prevId => prevId + 1);
                setItems("");
                 setEditItems(false)

                    


                      
            }

     
           

     return (
        
   <div className="min-vh-100 bg-light d-flex justify-content-center pt-5">
    <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "600px" }}>
      
      <h1 className="text-center mb-4 text-primary fw-bold">
        NJEZE'S LIST APP
      </h1>

      <Todoinput
        items={items}
        handleChange={handleChange}
        handlesubmit={handleSubmit}
        editItems ={editItems}

      />

      <Todolist
        todoItems={todoItems}
        clear={handleclear}
        handleDelete={handleDelete}
        edithandle ={handleEdit}
      />

    </div>
  </div>
);

     

}




export default App;
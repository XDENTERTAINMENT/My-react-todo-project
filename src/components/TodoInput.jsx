import React from 'react'

function Todoinput(props) {
  return (
    <div className='card  card-body mt-3   '>

        <form   onSubmit={props.handlesubmit}>
           
         <div  className='input-group'>
             
                   <div className='input-group-text bg-primary text-white'>
                      <i  className='fa fa-book '  />
                 
                     </div>
                   
                 <input type="text" 
                 className="form-control text-capitalize"
                 placeholder="enter todo items"
                 value={props.items}
                 onChange={props.handleChange}>


  
                    </input>

            
          </div>

            <div  className='list-group'>
                 <button 
                
                 type="submit" 
                 className=   {props.editItems? ' btn btn-block btn-success mt-3  btn-sm' : 
                   ' btn btn-block btn-primary mt-3  btn-sm' }
              
                 >  {props.editItems? "edit item" :
                  "Add item"} </button>
            </div>

        </form>
      
    </div>
  )
}

export default Todoinput;

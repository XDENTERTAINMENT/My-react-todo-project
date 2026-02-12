import React, { useState } from 'react'

function TodoItem(props) {

  const [checked, setChecked] = useState(false)

  let styles;

  if (checked) {
    styles = {
      color: "green",
      textDecoration: "line-through"
    }
  } else {
    styles = {
      color: "red"
    }
  }

  return (
    <li className="list-group-item 
    d-flex 
    justify-content-between
     align-items-start">

      <div className="d-flex align-items-center">
        <input 
          type="checkbox" 
          className="form-check-input me-2"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        
        <h6 style={styles}  
        
        className="mb-0 flex-grow-1 text-break me-2">
          {props.title}
        </h6>
       
      </div>

      <div className='todo-icon'>
        <span 
          className='mx-2 text-success' 
          onClick={props.edithandle}>
          <i className="fa fa-pencil"></i>
        </span>

        <span 
          className='mx-2 text-danger' 
          onClick={props.handleDelete}>
          <i className='fa fa-trash'></i>
        </span>
      </div>

    </li>
  )
}

export default TodoItem;

import React from 'react';



function CreateNewTask(props){
    return(
      <div>
      <input value={props.value} onChange={props.updatevalue} />
      <button onClick={props.addTask}>Add task</button>
      </div>
    )
  }
  
  export default CreateNewTask;
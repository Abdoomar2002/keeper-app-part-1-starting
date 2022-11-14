import React from "react";
function ToDoItem(props)
{
  return <li id={props.id} onClick={()=>props.onCheck(props.id)}>{props.val}</li>
}
export default ToDoItem;

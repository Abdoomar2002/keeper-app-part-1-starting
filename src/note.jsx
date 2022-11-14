import React from "react";
function Note( props)
{
  return( <div className="note">
<h1>{props.title}</h1>
<p>{props.content}</p>
<button className="delete" onClick={()=>props.delete(props.id)}><i className="fa-solid fa-trash d2"></i></button>
  </div>);
}
export default Note;

import React from "react";
function InputArea( props)
{
  return <div>
  <form onSubmit={props.handleSubmit}>
  <div className="form-floating">
  <input type="text" id="a1" className="b form-control" name="title" value={props.value.title}  onChange={props.onChange} />
  <label htmlFor="a1"> Title </label>
  </div>
  <div className="form-floating">
  <input type="text" id="a1" className="b form-control" name="note" value={props.value.note} onChange={props.onChange} />
  <label htmlFor="a1"> Note </label>
  </div>
  <p>Add Note</p>
  <button type="submit" className="submit" >
<i className="fa-solid fa-circle-plus"></i>
  </button>
  </form>
  </div>
}
export default InputArea;

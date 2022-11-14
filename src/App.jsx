import React,{useState} from "react";
import Header from"./Header";
import Footer from "./footer";
import Note from "./note";
import InputArea from "./InputArea";
import ToDoItem from"./toDoItem";
import Data from "./file.js";


// var id =0;
function App()
{ var [arr,addArray]=useState(Data);
  const [note,addNote]=useState({
    title:"",
    note:""
  });
  function handleChange(e){
  var name=e.target.name;
  var value=e.target.value;
 addNote(note=>{return{...note,[name]:value}})

}
function handleSubmit(e)
{   var c="note";
  console.log(c);
     arr.push(note);
         addNote({title:"",note:""})
    e.preventDefault();


  // console.log(list);
}

function deleteItem(id)
{
  addArray(pervItem=>{return pervItem.filter((item,index)=>index!==id-5);});
   console.log(arr);
}
  return<div>
<Header />
<h1>To do list</h1>
<InputArea
value={note}
onChange={handleChange}
handleSubmit={handleSubmit} />
<div className="notes">
 {arr.map((note,index) => <Note
    key={index+5}
    id={index+5}
    title={note.title}
    content={note.note}
    delete={deleteItem}/>)}
</div>
<Footer />



  </div>
}
 export default App;

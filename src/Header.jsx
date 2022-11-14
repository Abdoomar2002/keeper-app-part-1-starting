import React,{useState} from "react";
function Header()
{ var curr=new Date().toLocaleTimeString();
  
  const [automatic,setDate]=useState(curr);
  function increase()
  {
    curr=new Date().toLocaleTimeString();
    setDate(curr);

  }setInterval(increase,1000)
  return <header><h1>Keeper App</h1>
<h1>{automatic}</h1>
  </header>
}
export default Header;

import React,{useState} from "react";
function Footer()
{
  var time=new Date().toLocaleTimeString();
  const [date,setDate] = new useState(time);
  function increase(){
    // var current=time.toLocaleTimeString();
    time=Date.toLocaleTimeString();
    setDate(time);
  }

  return<div className="footer">

    <p>
  @copyright 2022
    </p>
  </div>
}
export default Footer;

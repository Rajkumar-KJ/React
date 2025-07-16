import React, { useState } from 'react'
import './App.css'

function Condition() {

    const [set,setval]=useState(false);
    const [open,setOpen]= useState(false);
    var p1=document.getElementById("p1");
    
    if(open){
      p1.innerText="pass"
    }
    else{
      p1.innerText="fail"
    }

    
  return (
    < div id='div2'>
        <center>
            <button id='btn1' onClick={()=> setval(!set)}>click</button>
        <div id='div1' style={{backgroundColor: set ? "red" : "black" }}>Hello</div>
        </center>
        <button  onClick={()=> setOpen(!open)}>click</button>

        <p>{open && "open"}</p>
        <p id='p1'></p>
    </div>
  )
}
export default Condition
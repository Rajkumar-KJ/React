import React from 'react'
import Demo from './Demo';


function Input() {

    function clk(){
        var inp = document.getElementById("inp").value;
        var out1 = document.getElementById("out1");

        out1.innerText = inp;
        
        
    }
    



  return (
    <div>
        <Demo/>
        <input type='text' id='inp'></input>
        <button onClick={clk}>click</button>
        <p id='out1'></p>

    </div>
  )
}

export default Input;
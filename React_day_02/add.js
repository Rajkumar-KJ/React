import React from 'react'

function Add() {

    function Sum(){
        
        var num1 = document.getElementById("num1").value;
        var num2 = document.getElementById("num2").value;
        var out = document.getElementById("out");
        var sum = Number(num1)+ Number(num2)
        out.innerText = sum;
    }

  return (
    <div>
        <input type='number' id='num1'></input>
        <input type='number' id='num2'></input>
        <button onClick={Sum} >click</button>
        <p id='out'></p>
    </div>
  )
}

export default Add;
import React from 'react'
import './App.css'

function Add() {

    function Sum(){
        
        var num1 = document.getElementById("num1").value;
        var num2 = document.getElementById("num2").value;
        var out = document.getElementById("out");
        var sum = Number(num1)+ Number(num2)
        out.innerText = sum;
    }

  return (
    <div id='add-div'>
        
        <input type='number' id='num1'></input>
        <input type='number' id='num2'></input>
        <button onClick={Sum} >Add</button>
        <p id='out'></p>
        
        
    </div>
  )
}

export default Add;
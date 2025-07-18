import React from 'react'
// import './App.css'
import { useNavigate } from 'react-router-dom';

function Add() {

    function Sum(){


        
        var num1 = document.getElementsByClassName("11")[0].value;
        var num2 = document.getElementById("num2").value;
        var out = document.getElementById("out");
        var sum = Number(num1)+ Number(num2)
        out.innerText = sum;
    }
     var aa = useNavigate();
    function fun1(){
      aa("/")
    }
  return (
    <div id='add-div'>
        
        <input type='number' id='num1' className='11'></input>
        <input type='number' id='num2'></input>
        <button onClick={Sum} >Add</button>
        <p id='out'></p>
        <button onClick={fun1}>nav</button>
        
        
    </div>
  )
}

export default Add;
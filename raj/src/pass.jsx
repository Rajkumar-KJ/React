import React, { useState } from 'react'

function Pass() {
const [pass, setPass]=useState(false);

  function fun1(){
    


  }
  return (
    <div>
        <input type="password"/>
        <button onClick={fun1}>click</button>
        {}
    </div>
  )
}

export default Pass;
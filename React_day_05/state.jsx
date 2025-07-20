import React, { useState } from 'react'

function State() {
    const [name , setname] = useState("raj");
    const [age , setage]= useState(18);
  return (
    <div>
        <p>name:{name}</p>
        <button onClick={() => setname("RAJ KUMAR")}>click</button>
        <p>age:{age}</p>
        <button onClick={() => setage(age+1)}>click</button>
    </div>
  )
}

export default State;
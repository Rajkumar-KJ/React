import React from 'react'
import  Props2  from './props2';

function Props1(props) {
  return (
   <div><h1>{props.val}</h1></div>
  )
}

function Call(){
  return(
    <div>
      <Props1 val="raj"/> 
      <Props2 vall = "kumar"/>
    </div>
  
  
  )
}

export default Call;
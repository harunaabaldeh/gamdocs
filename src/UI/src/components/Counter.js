
import React, { useState } from 'react'

const Counter = () => {
  const [counter,setCounter]= React.useState(0);

  return (
    <div style={{display:"flex",gap:2,justifyContent:"center",alignItems:"center",flexDirection:"column", height:"100vh"}}>
     <div>
     <b>Count is {counter}</b>
      </div> 
      <div>
      <button onClick={()=>setCounter(counter+1)}>Increment</button>
      <button onClick={()=>setCounter(counter-1)}>Decrement</button>
    </div>
    </div>
  )
}

export default Counter
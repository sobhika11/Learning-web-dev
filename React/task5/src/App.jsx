import React from 'react'
import { useState } from 'react'

const App = () => {
  const[toggle,Settoggle]=useState(false);
  return (
    <>
    <button onClick={()=>{Settoggle(!toggle)}}>click me please</button>
        {toggle && <div><h1>Hey there im here</h1></div>  }
    </>
  )
}

export default App
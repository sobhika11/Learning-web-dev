import React from 'react'
import { useState } from 'react'
import Student from './Student';
import Proptypes from './Proptypes';
const App = () => {
  const[toggle,Settoggle]=useState(false);
  return (
    <>
    <button onClick={()=>{Settoggle(!toggle)}}>click me please</button>
        {toggle && <div><h1>Hey there im here</h1></div>  }
      <Proptypes name="sobhi" age="20" />
      <Student/>
      
    </>
    
  )
}

export default App
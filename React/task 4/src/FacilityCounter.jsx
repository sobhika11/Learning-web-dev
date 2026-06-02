import React,{useState} from 'react'

export const FacilityCounter = () => {
    const[count,setCount]=useState(0);
  return (
    <div className='facility'>
        <p>The count of the employees in our company is {count}</p>
        <button onClick={()=> setCount((prev)=>prev+1)}>add</button>
        <button onClick={()=> setCount((prev)=>prev-1)}>remove</button>
    </div>
  )
}

// import React from 'react'
import { FacilityCounter } from './FacilityCounter'
import Securitybadge from './Securitybadge'
import './App.css'
const App = () => {
  return (
   <div className='facility'>
    <div className='badge'>
    <Securitybadge  name="sobhi" role="student" sec="20lpa" />
    <Securitybadge name="Sobhi" role="Security Engineer" sec="Level 3" />
    <Securitybadge name="Alice" role="Network Analyst" sec="Level 1" />
    <Securitybadge name="Bob" role="Database Admin" sec="Level 5 (Top Secret)" />
    
   </div>
   <FacilityCounter/>
   </div>
  )
}

export default App
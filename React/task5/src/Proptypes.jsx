import React from 'react'
import { useState } from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
const Proptypes = ({name,age}) => {

    const li= ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa']; 
    const items=li.map((li,i)=>{
        return <li key={i}>{li} ,{i}</li>;
    })
    const [names, setName] = useState("");

<h1>{name}</h1>
  return (
   <>
        <Container>
          
            <h1>Hello I'm {name} </h1>
            <h2>{age}</h2>
            <h3>{items}</h3>

            <input
            value={names}
            onChange={(e) => setName(e.target.value)}
            />
          <h1>{names}</h1>
        </Container>
        
   </>
  );
  
};
Proptypes.PropTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};
const Container=styled.div`
background-color:blue;
color:white;
h1{
color:black;
}
`;
export default Proptypes
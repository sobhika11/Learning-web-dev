import React from 'react'
import PropTypes from "prop-types";
const Proptypes = ({name,age}) => {
  return (
   <>
        <div>
            <h1>Hello I'm {name} </h1>
            <h2>{age}</h2>
        </div>
   </>
  );
  
};
Proptypes.PropTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default Proptypes
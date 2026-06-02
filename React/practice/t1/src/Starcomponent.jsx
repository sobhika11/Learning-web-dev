import React from 'react'
import staremp from './images/star-empty.png'
import starfill from './images/star-filled.png'
const Starcomponent = (props) => {
    const starIcon=!props.isFilled?staremp:starfill
  return (
    <button
      onClick={props.handleClick}
      aria-pressed={props.isFilled}
      aria-label={
        props.isFilled ? "Remove from favorites" : "Add to favorites"
      }
      className="favorite-button"
    >
      <img
        src={starIcon}
        alt={props.isFilled ? "filled star icon" : "empty star icon"}
        className="favorite"
      />
    </button>
  );
}

export default Starcomponent
import React from "react"
export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */

    const [shown,setState]=React.useState(false)
    function handleSubmit(){
        setState(prev=>!prev)
    }
    return (
        <div>
            
            {props.setup && <h3>{props.setup}</h3>}
            <p>{ shown && props.punchline}</p>
            {!shown && <button onClick={handleSubmit}>Show Punchline</button>}
            {shown && <button onClick={handleSubmit}>Hide Punchline</button>}

            <hr />
        </div>
    )
}
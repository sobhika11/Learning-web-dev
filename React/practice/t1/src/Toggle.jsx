import React from "react"
export default function Toggle() {
    const [state, setTog] = React.useState("yes")

    function handleClick() {
        setTog(prevState => prevState === "yes" ? "no" : "yes")
    }

    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value" onClick={handleClick}>
                {state}
            </button>
        </main>
    )
}

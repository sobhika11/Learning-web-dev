import React from 'react'
import jokesData from './jokesData'
import './App.css'
const entries = jokesData.map((joke) => {
  return <h2>{joke.setup}<br></br>
  {joke.punchline}</h2>
})
const App = () => {
  return (
    <>
    {entries}
    </>
  )
}

export default App
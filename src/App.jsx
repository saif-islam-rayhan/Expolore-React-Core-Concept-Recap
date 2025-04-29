import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <h1>React Core Concept Recap</h1>
      <ul>
        <li>Components</li>
        <li>Jsx</li>
        <li>Props</li>
        <li>Event handler</li>
        <li>State </li>
        <li>Load data</li>
      
    
      </ul>
      <hr />
      <Posts></Posts>
      
    </>
  )
}

export default App

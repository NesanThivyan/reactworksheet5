import { useState } from 'react'
// import './App.css'
import Parent from './components/parent'
import Child from './components/child'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Parent />
      <Child/>
    </>
  )
}

export default App

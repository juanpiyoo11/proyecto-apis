import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Navbar from'./navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar /> 
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let newArr = [1,2,3]
  let myObj = {
    name:"sumit",
    age:"21"
  }
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>tailwind test</h1>
    
    <Card  username="Sumit B" role="lead" />
    <Card  username="hitesh" />
    <Card  username="hitesh" />
    </>
  )
}
 

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,changecolor] = useState('olive')

  // function change(c){
  //   body.style.

  // }
  return (
    <>
    <div className='w-full h-screen duration-200'  style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2'>
      <div className='flex  flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-xl'>
        <button onClick={()=>changecolor("red")} className='outline-none px-4 py-1  rounded-md' style={{backgroundColor:"red"}} >Red</button>
        <button onClick={()=>changecolor("green")} className='outline-none px-4 py-1  rounded-md' style={{backgroundColor:"green"}} >green</button>
        <button onClick={()=>changecolor("yellow")}  className='outline-none px-4 py-1  rounded-md' style={{backgroundColor:"yellow"}} >yellow</button>
        <button onClick={()=>changecolor("blue")}  className='outline-none px-4 py-1  rounded-md' style={{backgroundColor:"blue"}} >blue</button>
        <button onClick={()=>changecolor("grey")}  className='outline-none px-4 py-1  rounded-md' style={{backgroundColor:"grey"}} >grey</button>
        <button onClick={()=>changecolor("orange8")}  className='outline-none px-4 py-1  rounded-md' style={{backgroundColor:"orange"}} >orange</button>
      
      
      </div>
    </div>
    
    </div>
      
    </>
  )
}

export default App

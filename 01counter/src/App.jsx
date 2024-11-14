 import { useState , useEffect} from 'react'   // userState,,.,.. is a hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  let [counter,setCounter] =  useState(15)

  // let counter = 10;
  
  const addValue =() =>{
    console.log("value added ",counter)
    
    if(counter<20){
      // counter+=2;
      // setCounter(counter)
      // counter+=1;
      // setCounter(counter)
      setCounter(counter =>counter+1)
      
      setCounter(counter =>counter+1)
      setCounter(counter =>counter+1)
    }
  }

  const removeVal = ()=>{
    if(counter>0 ){
      setCounter(counter-1)
    }
  }
 return(
    <div>
    <h1>
      chai aur code {new  Date().getFullYear() } &copy;
    </h1>

    <h2>
      counter value: {counter}
    </h2>

    <br />
    <button onClick={addValue}>add value </button>
    <br />
    <button onClick={removeVal}>reomve value</button>
    </div>
 )
}
// ui application controlled by REACT
export default App



// const [count, setCount] = useState(0)

// return (
//   <>
//     <div>
//       <a href="https://vitejs.dev" target="_blank">
//         <img src={viteLogo} className="logo" alt="Vite logo" />
//       </a>
//       <a href="https://react.dev" target="_blank">
//         <img src={reactLogo} className="logo react" alt="React logo" />
//       </a>
//     </div>
//     <h1>Vite + React</h1>
//     <div className="card">
//       <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//       </button>
//       <p>
//         Edit <code>src/App.jsx</code> and save to test HMR
//       </p>
//     </div>
//     <p className="read-the-docs">
//       Click on the Vite and React logos to learn more
//     </p>
//   </>
// )
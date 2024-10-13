import { useState , useCallback , useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed ,setNumAllowed ] = useState(false)
  const [charAllowed ,setCharAllowed ] = useState(false)
  const [pwsd,setpwsd] = useState("")
 
  // useref hook
  const pwsdRef = useRef(null)

  const copyPwsdToClipboard= useCallback( ()=> {
    pwsdRef.current?.select();
    pwsdRef.current?.setSelectionRange(0,10)
    window.navigator.clipboard.writeText(pwsd)
  }, [pwsd])


  const pwsdGenerator = useCallback(() =>{
    let psd = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numAllowed) str +="0123456789"
    if(charAllowed) str +="!@#$%^&*()+_{}:?><[]"

    for(let i=1;i<= length;i++){
      let char = Math.floor(Math.random()*str.length + 1);
      psd += str[char]
    }
    setpwsd(psd)

  }, [length,numAllowed,charAllowed,setpwsd])

  useEffect( () => { 
    pwsdGenerator() }, [length, numAllowed , charAllowed ,pwsdGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-4 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>password-generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={pwsd}  className='outline-none w-full py-1 px-1' placeholder='password' readOnly  ref = {pwsdRef}/>

        <button className='outline-none bg-blue-700 text-white px-3' onClick={copyPwsdToClipboard}>copy</button>
        
      </div>
      <div className='flex test-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={8} max={20} value={length} className='cursor-pointer' onChange = {(e) => setLength(parseInt(e.target.value))}/>
          <label>length</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked = {numAllowed} id="numberInput" onChange={() => setNumAllowed((prev) => !prev)} />
          <label>number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"defaultChecked = {charAllowed} onChange={ ()=> setCharAllowed((prev)=> !prev)}/>
          <label>special chars</label>
        </div>
      </div>
      </div>

    </>
  )
} 

export default App

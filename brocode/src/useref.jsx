import React,{useState,useEffect,useRef} from "react";
// ? ref is a object with one property - current(value,array,object)
function MyCompRef(){
    // let [number,setNumber] = useState(0) , instead use useRef function
    // const ref = useRef(0)
    const inputRef = useRef(null)
    const inputRef1 = useRef(null)

    // console.log(ref)
    useEffect(() =>{
        console.log("COMP RENDERED")
        console.log(inputRef)
    })
    function handleClick(){
        // setNumber((n) => n+1)
        // ref.current = ref.current+1
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = "yellow"
        inputRef1.current.style.backgroundColor = ""
        // console.log(ref.current)
    }
    function handleClick1(){
        // setNumber((n) => n+1)
        // ref.current = ref.current+1
        inputRef1.current.focus()
        inputRef1.current.style.backgroundColor = "yellow"
        inputRef.current.style.backgroundColor = ""
        // console.log(ref.current)
    }
    return(
        <>
        <button onClick={handleClick}> CLICK ME </button>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick1}> CLICK ME </button>
        <input type="text" ref={inputRef1} />
        </>
    )
}

export default MyCompRef
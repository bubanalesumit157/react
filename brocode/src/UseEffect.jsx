import React,{useEffect,useState} from "react";


// useEffect( () => )   //runs after every rerender, runs for any component that changes
// useEffect( () => ,[no values])  // runs only once after rerender
// useEffect( () => [values])   // // runs only when values change after rerender
function Efect(){
    const [count,setCount] =  useState(0)
    const [count1,setCount1] =  useState(0)
    useEffect( () =>{
        document.title = `Count:${count1}`
        return () =>{
            // some cleanup code
        }
    },[count,count1])
    // useEffect( () =>{
    //     document.title = `Count:${count}`
    // },[])
    // useEffect( () =>{
    //     document.title = `Count:${count}`
    // },[count])
    function addCount(){
        setCount((c)=>c+1)
    }
    function addCount1(){
        setCount1((c)=>c+1)
    }


    const [width,setWidth] = useState(window.innerWidth)
    const [height,setHeigth] = useState(window.innerHeight)
    
    
    
    useEffect( () => {
        window.addEventListener("resize",handleResize)
        console.log("event listen added")

        return() =>{
            window.removeEventListener("resize",handleResize)
            console.log("event  listen  removed")
        }
    },[])
    
    useEffect(()=>{
        document.title = `${width} x ${height}`
    },[width,height])
    function handleResize(){
        setWidth(window.innerWidth)
        setHeigth(window.innerHeight)
    }

    return(

        <>
        <p>Count: {count}</p>
        <button onClick={addCount}>ADD</button>
        <p>Count: {count1}</p>
        <button onClick={addCount1}>ADD</button>


        <p id="w">window width:{width}</p>
        <p id="h">window height:{height}</p>
        </>
    )
}

export default Efect
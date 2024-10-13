import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect( ()=>{
    //     fetch('https://api.github.com/users/bubanalesumit157')
    //     .then(response => response.json())
    //     .then( data =>{
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

    return(
        <div className="text-center p-3 m-4 text-3xl">
            github followers: {data?.followers}
            <img  className="text-center  flex flex-wap " width={300} src={data?.avatar_url} alt="" />
            
        </div>
    )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/bubanalesumit157')
    return  response.json()
        
}
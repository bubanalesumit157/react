 // useContext React hook that allows to share values between 
//   multile levels of components without passing props through
//  each level

// PROVIDER COMPONENT
// 1.import {createContext} from 'react'
// 2.export const MyContext = createContext();
// 3.<MyContext.Provider value={value}>
// <Child/>
// </ MyContext.Provider>


import React,{useContext,createContext,useState} from "react";
import CompB from "./CompB";

export const userContext = createContext();
function CompA(){
    const  [user,setuser] = useState("sumit")
    return(
        <>
        <div className="box">
            <h1>CompA</h1>
            <h2>{`Hello ${user} ` }</h2>
            <userContext.Provider value={user}>
                <CompB/>
            </userContext.Provider>
        </div>
        </>
    )
}
export default CompA
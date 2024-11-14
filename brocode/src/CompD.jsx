 // useContext React hook that allows to share values between 
//   multile levels of components without passing props through
//  each level

import React,{useContext} from "react";
import { userContext } from "./CompA";
function CompD(){
    const value = useContext(userContext)
    return(
        <>
        <div className="box">
            <h1>CompD</h1>
            <h2>Hello {value}</h2>
        </div>
        </>
    )
}
export default CompD
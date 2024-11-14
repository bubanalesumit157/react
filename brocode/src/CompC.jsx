 // useContext React hook that allows to share values between 
//   multile levels of components without passing props through
//  each level

import React,{useContext} from "react";
import CompD from "./CompD";
import { userContext } from "./CompA";
function CompC(){
    const val = useContext(userContext)
    return(
        <>
        <div className="box">
            <h1>CompC</h1>
            <h2>{val}</h2>
            <CompD />
        </div>
        </>
    )
}
export default CompC
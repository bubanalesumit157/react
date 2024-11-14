 // useContext React hook that allows to share values between 
//   multile levels of components without passing props through
//  each level

import React,{useContext} from "react";
import CompC from "./CompC";
function CompB(){
    return(
        <>
        <div className="box">
            <h1>CompB</h1>
            <CompC />
        </div>
        </>
    )
}
export default CompB
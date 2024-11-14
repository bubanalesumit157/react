function Button(){
    let count =0;
    const handleClick = (name) => {
        if(count <3){
            count++;
            console.log("ouch h "+name)
        }
        else{
            console.log("dont click "+name)
        }
        
    }

    const handleClick2 = (e) =>{
        e.target.textContent = "ouch"
        console.log(e)
    } 
    const handleimage = (e) =>{
        e.target.style.display = "none"
    }
    return( 
        <>
        <button onDoubleClick={(e) => handleClick2(e)}>click me</button>
        <br /> <img src="" alt="click me" onClick={handleimage}/>
    
        </>
    )
}

export default Button
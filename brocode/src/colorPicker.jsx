import React,{useState} from "react"


function ColorPicker(){
    const [color,setColor] = useState("#FFFFFF")
    function handleColorChange(e){
        setColor(e.target.value)
    }
    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>   
            {/* css props in js {{ }}  use double parenthesis*/}
            <div className="color-display" style={{backgroundColor:color}}>
            <p>Selected code:{color}</p>
            </div>
            
                <label htmlFor="">Selecta a color</label>
                <input type="color" value={color} onChange={handleColorChange}/>

        </div>
    )
}

export default ColorPicker
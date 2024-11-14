import React,{useState} from "react";

function TododList(){
 
    const [tasks, setTasks] = useState(["eat","repaet"])
    const [newTask , setNewTask] = useState("")

    function handleInputChange(e){
        setNewTask(e.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks( t => [...t , newTask ])
            setNewTask("")
        }
    }

    function delTask(index){

        const updatedTasks = tasks.filter((_,i) => i!==index)
        setTasks(updatedTasks)
    }
    
    function moveTaskUp(index){
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks)
            
        }

        setTasks(updatedTasks)


    }
    function moveTaskDown(index){
        if(index<tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

     return(
        <>

        <div className="todolist">
            <h1>TO-Do-LIST</h1>
            <div>
                <input 
                type="text"
                placeholder="enter a task.."
                value={newTask}
                onChange={handleInputChange}
                />

                <button 
                className="add-btn" onClick={addTask}>ADD</button>
            </div>

            <div>
                <ol>
                    {tasks.map((task,index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="del-btn"  onClick={() => delTask(index)}>Delete</button>
                        <button className="moveup-btn"  onClick={() => moveTaskUp(index)}>MOVE UP</button>
                        <button className="movedown-btn"  onClick={() => moveTaskDown(index)}>MOVE DOWN</button>
                    </li>
                     )}
                </ol>
            </div>
        </div>
        
        </>
    )
}

export default TododList

import React,{useState} from "react"
// useState hook gives us a Stateful  Variable and Setter function
function Component(){
    const [name , setName] = useState("guest");
    const [age,setAge]  = useState(0)
    const [isEmp,setIsEmp]  = useState(false)
    const updateName = (e) =>{
        setName("spongebob")
    }

    
    const [car,setCar] = useState( {year: 2024, 
                                    make:"ford" ,
                                    model:"mustang"})

    function handleYear(e){
        setCar(c => ({...c , year:e.target.value}))  // ... is spread operator it spreads everything 
        // here it becomes {year:2024,make:"ford",model""mustang",year:2024} heer last value of year id reflected
        //  and also use => operator to update by referencing previous state
    }

    function handleMake(e){
        setCar(c => ({...c,make:e.target.value}) )
    }
    function handleModel(e){
        setCar(c => ({...c,model:e.target.value}))
    }

    const [foods,setFoods] = useState(["apple", "orange", "banana"])
    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value
        document.getElementById("foodInput").value = ""

        setFoods(f => [...f,newFood])

    }
    function handleRemoveFood(index){
        // setFoods( f => (f.filter( ({food}) => food !== remFood)))
        setFoods( foods.filter(( _ , i ) => i !== index ) )
    }
    //_element ,here _ means ignore that parameter

    const inc = () =>{
        // setAge(age+7)
        // setAge(age+3)
        // setAge(age+2)  //all these will not update value only last one will so use callback 
        setAge((a) => a+1)  // updater function - makes var furure-proof
    }
    const dec = () =>{
        setAge((age) => age-1)
    }
    const reset = () =>{
        setAge((age) => 0)
    }

    const toggleEmpStatus = () =>{
        setIsEmp(!isEmp)
    }

    const [name1 , setName1] = useState("guest")
    const [quantity,setQuantity] = useState(0)
    const [comment,setComment] = useState("")
    const [payment,setPayment] = useState("")
    const [shipping,setShipping] = useState("") 


   // onchange events
    const handleChange = (e) =>{
        setName1(e.target.value)
    }
    const handleQuantity = (e) => {
        setQuantity(e.target.value)
    }

    function handleComment(e){
        setComment(e.target.value)
    }

    function handlePayment(e){
        setPayment(e.target.value)

    }

    function handleShipping(e){
        setShipping(e.target.value)
    }


    const [cars,setCars] = useState([])
    const [year,setYear] = useState(new Date().getFullYear())
    const [make,setMake] = useState("")
    const [model,setModel] = useState("")
    
    function addCar(){
        const newCar = {cYear:year , 
                        cMake:make , 
                        cModel:model}

        setCars(c => [...c , newCar])

        setYear(new Date().getFullYear())
        setMake("")
        setModel("")
    }

    function removeCar(index){
        setCars(cars.filter(( _ , i) =>  i !== index))
    }
    function handleYear(e){
        setYear(e.target.value)
    }
    function handleMake(e){
        setMake(e.target.value)
    }
    function handleModel(e){
        setModel(e.target.value)
    }



    return(
        <>


            <h2>List of car Objects</h2>
            <ul>
                {cars.map((car,index) => <li key={index} onClick={ () => removeCar(index) } > {car.cYear}  {car.cMake} {car.cModel}</li> )}
            </ul>
            <input type="number" value={year} onChange={handleYear}/><br />
            <input type="text" value={make}  onChange={handleMake}  placeholder="enter make"/><br />
            <input type="text" value={model} placeholder="enter model" onChange={handleModel}/><br />
            <button onClick={addCar} >Add car</button>


         {/* <div>
            <h2>list of food</h2>
            <ul>
                {foods.map((food,index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)} >
                        {food}
                    </li> )}
                <input type="text" id="foodInput" placeholder="enter food name" />
                <button onClick={handleAddFood}>add food</button><br />
                </ul>

         </div>/ */}

        {/* <div>
            <p>your fav car is {car.year} , {car.make} , {car.model}</p>
            <input type="number" value={car.year} onChange={handleYear} /> <br />
            <input type="text" value={car.make} onChange={handleMake} /> <br />
            <input type="text" value={car.model} onChange={handleModel} />
        </div>


        <div>
            <p>Name:{name}</p>
            <button onClick={updateName}>set name</button>
        </div>
        <div>
            <p>Age:{age}</p>
            <button onClick={inc}>increment</button>
            <button onClick={dec}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>

        <div>
            <p>isEmpployes: {isEmp?"yes":"no"}</p>
            <button onClick={toggleEmpStatus}>toggle</button>
        </div>

        <div>
           <div>
           <input type="text" onChange={handleChange} />
           <p> name: {name1} </p>
           </div>

            <input type="number" onChange={handleQuantity} />
            <p> quantity: {quantity}</p>

            <input type="text" name="" id="" onChange={handleComment} />
            <p>Comments:{comment}</p>

            <textarea name="" id="" onChange={handleComment} placeholder="enter info"/>
            <p>Comments:{comment}</p>

            <select name="" id="" value={payment} onChange={handlePayment} >
                <option value="">select a option</option>
                <option value="visa">visa</option>
                <option value="mastercard">mastercard</option>

            </select>
            <p>payemnt option selected: {payment} </p>


            <label > <input type="radio"  value="pickup"  onChange={handleShipping}/> pick up</label>
            <label > <input type="radio"  value="delivery" checked={shipping === "delivery"} onChange={handleShipping}/> delivery</label>
            <p>Shipping method: {shipping}</p>
            
        </div> */}
        </>
    )
}
export default Component
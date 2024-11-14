import { useState } from 'react'
import Food from './food'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

// import Button from './Buttons/button'
// import Card from './card'
// import Student from './student'
// import UserGreeting from './userGreeting'
// import List from './list'
// import Button from './Btn'
// import ColorPicker from './colorPicker'
// import Component from './MyComponent'
// import TododList from './Todo'
// import Efect from './UseEffect'
// import DigiClock from './DigitalClock'
// import CompA  from './CompA'
// import MyCompRef from './useref'
import StopWatch from './StopWatch'



function App() {
  // const [count, setCount] = useState(0)
  // const fruit = [{id:1,name:"grapes",calories: 96},
  //   {id:2,name:"coconut",calories: "95"},
  //   {id:3,name:"banana",calories: 102},
  //   {id:4,name:"orange",calories: 101},
  //   {id:5,name:"apple",calories: 99}];
    // const fruit1 = []


  return (
    <>

   {/* food is component which can be reused any no of times which consist of html and js  */}
    {/* <Food></Food>   
    <Food></Food>
    <Food></Food>l */}
    
     {/* <Card /> */}
     {/* <Button></Button>*/}
   

    {/* props */}
    {/* <Student name="spongebob"  age={33} isStudent={true} />
    <Student name="sumit"  age={21} isStudent={true} />
    <Student  age={21} isStudent={true} />
    <Student/> */}

    {/* <UserGreeting isLoggedIn={true}  userName = "Sumit" /> */}
    

      {/* {/* {fruit.length>0 ?<List  fruits = {fruit} category="fruit"/>:null}
      {fruit.length>0 && <List  fruits = {fruit}/>}
      <List  /> */}
      {/* {fruit1.length>0 ?<List  fruits = {fruit1}/>:null} */} 
     

     {/* <Button/> */}


        {/* <Component/> */}

        {/* <ColorPicker/> */}


        {/* <TododList />*/}

        {/* <Efect /> */}

        {/* <DigiClock /> */}

        {/* <CompA /> */}
        

        {/* <MyCompRef/> */}

        <StopWatch />
        <StopWatch />
    </>
  )
}

export default App

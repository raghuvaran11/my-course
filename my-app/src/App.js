import logo from './logo.svg';
import React,{useState} from "react"

import NewComponent from "./component/NewComponent";
const App=()=> {

  const [count,setCount]= useState(1)
  const [allnames,setAllnames]= useState(["raghu","rakesh","bunny","sunny","raju"])
  
  
  // let name = "raghu"
  // let age = 29
  // let data = "this data comes from parent component"
  
  const changeNames=()=>{
setAllnames(["Rahul","laxmi","srikanth","lucky","vinod"])
  }

const increaseCountValue =()=>{
  console.log("this function is call from button click")
  setCount(count+1)
}
const decreaseCountValue =()=>{
  console.log("this function is call from button click")
  setCount(count-1)

}

 
  return (
    
      <>
    <h1>App</h1>
    <h1>{count}</h1>
    
    
    
    <button onClick ={increaseCountValue}>Increment</button>
    <button onClick ={decreaseCountValue}>decrement</button>
    <button onClick ={changeNames}>changeNames</button> 
    {
      allnames.map((name) =>(
        <h1>{name}</h1>
      )
      )
    }

    {/* <NewComponent  name= "Rahul"  age ={22}  data= "this data comes from parent component"/> */}
    {/* <NewComponent  name= {name}  age ={age}  data= {data}/> */}
      </>

  );
}

export default App ;

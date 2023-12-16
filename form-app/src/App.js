
import React,{useState} from 'react'
import Component from "./Component"



const App=()=>{
    const handleFormSubmit=()=>{
        console.log(" ")
    }

// const[count,setCount]=useState(0)
// const [alldata,setAlldata]= useState (["raghu","rahul","ramesh","raneesh"])

// const increamentCountValue=()=>{
//   setCount(count+1)
// }
// const decreamentCountValue=()=>{
//   setCount(count-1)
// }
// const changeData=()=>{
//   setAlldata (["swathi","swapna","swaoopa","swarna"])

// }
// const studentName="raghu"
// const Batch=13
// const teacherName="rakesh"

return (
  <>
  {/* <h1>increamentCountValue  and decreaseCountValue </h1>
  <h1> {count} </h1>
  <button onClick ={increamentCountValue}>increase values</button>
  <button onClick ={decreamentCountValue}>decrease values</button>
  <button onClick={changeData}>click chnage data</button>
   
  {
      alldata.map((data)=>(
        <h1>{data}</h1>
      ))
    }

<h1>props method</h1> */}
<Form onSubmit={handleFormSubmit}/> 

{/* <Newcomponent studentName="raghu" batch={13} teacherName="rakesh" /> */}
</>
  );
};
export default Component;

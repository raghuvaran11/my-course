import React, { Component, useState } from 'react'

const file = (props) => {
    const [data,setData]=useState({
        fname:"",
        lname:"",
        email:"",
        age:"",
        phone:"",
        gender:"",
    })
    const handleInputChange=(event)=>{
        console.log("value",event.target.value,"name",event.target.name)
        setData({...data,[event.target.name]:event.target.value})
    }
        const handleSubmit=(event)=>{
            event.preventDefault()
            console.log("data",data)
            try{
                const respone = await axios.post("http://localhost:4000/employee",data)
            } catch(error){
                console.log(error)
            }
        }


  return (
    
      <div className="form-container">
    <form onSubmit={handleSubmit}>

    <div className="form-group">
    <label>First Name</label>
    <input 
    type="text"
    name="fname"
    value={data.fname}
    onChange={handleInputChange}/>
    </div>
    <div>
        <label>Last Name:</label>
        <input 
        type="text"
        name="fname"
        value={data.fname}
        onChange={handleInputChange}/>
    </div>
    <div>
        <label>EmailId:</label>
        <input 
        type="email"
        name="email"
        value={data.email}
        onChange={handleInputChange}/>
    </div>
    <div>
        <label>Age:</label>
        <input 
        type="text"
        name="age"
        value={data.age}
        onChange={handleInputChange}/>
    </div>
    <div>
        <label>phonenumber:</label>
        <input 
        type="text"
        name="phone"
        value={data.phone}
        onChange={handleInputChange}/>
    </div>
    <div>
        <label>Gender:</label>
        <input 
        type="text"
        name="gender"
        value={data.gender}
        onChange={handleInputChange}/>
    </div>
    <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default file

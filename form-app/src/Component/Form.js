import React, { Component, useState } from 'react'
import "./Form.css"

const Form = (props) =>{

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [gender, setGender] = useState("");
    const [photo, setPhoto] = useState("");
    const [address, setAddress] = useState("");

    const handleInputChange = (event) => {
        console.log("value",event.target.value,"name",event.target.name)
        if(event.target.name==="fname"){
             setFname(event.target.value);
        }else if (event.target.name==="lname"){
             setLname(event.target.value)
        }else if (event.target.name==="email"){
             setEmail(event.target.value)
        }else if (event.target.name==="age"){
            setAge(event.target.value)
        }else if (event.target.name==="phoenumber"){
            setPhonenumber(event.target.value)
        }else if (event.target.name==="gender"){
             setGender(event.target.value)
        }else if (event.target.name==="photo"){
             setPhoto(event.target.value)
        }else if (event.target.name==="address"){
            setAddress(event.target.value)
        } else {
            console.log("no-results")
        }
    };
  
        const handleSubmit = (event) => {
            event.preventDefault();
        }

  return (

    <div className="form-container">
    <form onSubmit={handleSubmit}>

    <div className="form-group">
    <label>First Name</label>
    <input 
    type="text"
    name="fname"
    value={fname}
    onChange={handleInputChange}/>
    </div>

    <div className="form-group">
    <label> last Name</label>

    <input 
    type="text"
    name="lname"
    value={lname}
    onChange={handleInputChange} />
    </div>

    <div className="form-group">
    <label> Email</label>

    <input 
    type="text"
    name="email"
    value={email}
    onChange={handleInputChange} />
    </div>

    <div className="form-group">
    <label> phonenumber</label>
    <input 
    type="text"
    name="phonenumber"
    value={phonenumber}
    onChange={handleInputChange} />
    </div>

    <div className="form-group">
    <label>age </label>
    <input 
    type="text"
    name="age"
    value={age}
    onChange={handleInputChange} />
    </div>

    <div className="form-group">
    <label> gender</label>
    <input 
    type="text"
    name="gender"
    value={gender}
    onChange={handleInputChange} />
    </div>

    <div className="form-group">
    <label> photo</label>
    <input 
    type="text" 
    name="photo"
    value={photo}
    onChange={handleInputChange} />
    </div>

    <div className="form-group">
    <label>address</label>
    <input 
    type="text"
    name="address"
    value={address}
    onChange={handleInputChange} />
    </div>

    <button type="submit">Submit</button>
      </form>
       </div>
      
   );
};


export default Form;

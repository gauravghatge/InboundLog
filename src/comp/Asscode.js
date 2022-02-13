import React,{useState} from "react";
import { Dropdown, Option } from "./Dropdown";
import { useNavigate } from "react-router-dom";

const  Asscode =()=>{
  
const[val,setval]=useState("Area 1"); 
  const handleChange=(event)=> {    setval( event.target.value);  }
  const navigate=useNavigate();
  const handleSubmit=(event)=> {
alert(val);
      event.preventDefault();
    navigate('/assemblyhome',{state:{id:1,name:val}})
  }

  console.log(localStorage.getItem('username'));
    return (
      <div style={{width:"100%"}}>
        <h3 style={{paddingTop:"10%"}}>Select Your Assembly Area</h3>
      <form onSubmit={e=>{handleSubmit(e)}} style={{width:"100%",height:"100vh"}}>
        <label>
          <select value={val} onChange={e=>{handleChange(e)}} style={{backgroundColor: "#f9f9f9",
  minWidth: "160px",
 marginTop:"10%",
  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
  zIndex: "1",
  fontSize:"30px",
  padding:"1%",
  width:"300px"}}>
                          
            <option value="Area 1">Area 1</option>
            <option value="Area 2">Area 2</option>
            <option value="Area 3">Area 3</option>
            <option value="Area 4">Area 4</option>
            <option value="Area 5">Area 5</option>
            <option value="Area 6">Area 6</option>
          </select>
        </label>
      <div style={{width:"100%"}}>   <input type="submit" value="Submit" style={{backgroundColor: "#4CAF50",
  color: "white",
  marginTop:"1%",
   padding: "8px",
  fontSize: "20px",
  border: "none",
  cursor: "pointer",
    }} />
      </div>
      </form>

      </div>
    );
  }

export default Asscode;
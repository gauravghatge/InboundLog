import React,{useState} from "react";
import { Dropdown, Option } from "./Dropdown";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const  Asscode =()=>{
  
const[val,setval]=useState("A1"); 
  const handleChange=(event)=> {    setval( event.target.value);  }
  const navigate=useNavigate();
  const handleSubmit=(event)=> {
alert(val);
      event.preventDefault();
      handleCookie(val)
      navigate('/assemblyhome',{state:{id:1,name:val}})
  }


  const [cookies, setCookie] = useCookies(["user"]);

  const handleCookie =(a) => {
    
    setCookie("user", a, {
      path: "/"
    });
  }




  var c = new Intl.DateTimeFormat('en-US', {year: 'numeric',day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.now())

  console.log(c.slice(3,5)+'/'+c.slice(0,2) +'/'+c.slice(6,23));
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
                          
            <option value="A1">Area 1</option>
            <option value="A2">Area 2</option>
            <option value="A3">Area 3</option>
            <option value="A4">Area 4</option>
            <option value="A5">Area 5</option>
            <option value="A6">Area 6</option>
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
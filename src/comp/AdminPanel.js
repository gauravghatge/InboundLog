import React,{useState} from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
 


const  AdminPanel =()=>{

  const[val,setVal]=useState("S");
  const[timee,settime]=useState(30);
  
  const [cookies, setCookie] = useCookies(["timeout"]);

  const handleCookie =(e) => {
    e.preventDefault()
    var z=timee
    if(val=="M"){
      z = timee*60
    }
    setCookie("timeout", z, {
      path: "/"
    });
  }
  
  const navigate=useNavigate();
  const onasse=(event)=> {
alert("Assembly");
      event.preventDefault();
    navigate('/ass')
  }

  const ontrans=(event)=> {
    alert("Transporter");
          event.preventDefault();
        navigate('/transporterhome')
      }

      const onware=(event)=> {
        alert("Warehouse");
              event.preventDefault();
            navigate('/warehousehome')
          }
          console.log(timee)

    return (
      
      
      <div style={{width:"100%",height:"100vh",paddingTop:"10%",backgroundColor: "#33cccc"}}>
      <h2>Welcome to Admin Panel</h2>    
      <div  style={{width:"100%",height:"10vh",marginTop:"5%"}}><button onClick={onasse}>Assembly Home</button></div>
      <div style={{width:"100%",height:"10vh"}}><button onClick={ontrans}>Transporter Home</button></div>
      <div style={{width:"100%",height:"10vh"}}><button onClick={onware}>Warehouse Home</button></div>
      <div >
                      <input   placeholder="Enter Timeout" value={timee} onChange={e => {settime(e.target.value)}}  />
                      
                      <select value={val} onChange={e=>{setVal(e.target.value)}} >
                      <option value="M">Minutes</option>
                      <option value="S">Seconds</option>
                      </select>

                      <button onClick={ e=>  handleCookie(e)}>Submit </button>
                      
                  </div></div>
    );
  }

export default AdminPanel;
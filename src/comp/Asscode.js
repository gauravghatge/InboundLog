import React, { Component } from 'react'
import { useNavigate } from "react-router-dom";

const Asscode=()=> {
    const history= useNavigate();
    const handlesubmit=(event)=>{
        event.preventDefault();
        console.log("hiii");
        history('/assemblyhome');
      
       
      }
        return (
           
            <div style={{width:"100vw",height:"100vh",backgroundColor:"grey"}}>
            <form style={{width:"40%",marginLeft:"30%",paddingTop:"10%"}} onSubmit={event=>handlesubmit(event)}>
                <h3>Assembly Area Code</h3>
            
                <div className="form-group">
                   
                    <input  className="form-control" placeholder="Enter Assembly Area Code " required ={true}/>
                </div>

                <button type="submit"  className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    
}
export default Asscode;

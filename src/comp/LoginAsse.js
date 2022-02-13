import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { createBrowserHistory as history} from 'history';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from "axios";
import qs from "qs";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const LoginAsse=()=>{
  const history= useNavigate();
  const{useState}=React;
  const[inputtext,setinputtext]=useState({
  username:"",
  password:""
  });
  
  const[warnusername,setwarnusername]=useState(false);
  const[warnpassword,setwarnpassword]=useState(false);
  const[tr,settr]=useState("");
  const[eye,seteye]=useState(true);
  const[password,setpassword]=useState("password");
  const[type,settype]=useState(false);
  
  const inputEvent=(event)=>{
  const name=event.target.name;
  const value=event.target.value;
  setinputtext((lastValue)=>{
  return{
  ...lastValue,
  [name]:value
  }
  });
  
  }
  
  
  
  const submitForm=(e)=>{
  e.preventDefault();
  setwarnusername(false);
  setwarnpassword(false);
  if(inputtext.username==""){
  setwarnusername(true);
  }
  else if(inputtext.password==""){
  setwarnpassword(true);
  }
  else{

    if(inputtext.username=="sk@gmail.com" && inputtext.password=="test"){
      localStorage.setItem("role","store")
      localStorage.setItem("aot","true")
      
      localStorage.setItem('username','warehouse');
      localStorage.getItem('username');
      history('/warehousehome');
      
    }

    if(inputtext.username=="tr@gmail.com" && inputtext.password=="test"){
      localStorage.setItem("role","trans")
      localStorage.setItem("aot","true")
      localStorage.setItem('username','transporter');
      console.log(localStorage.getItem('username'))
      history('/transporterhome');

    }
    

    

    var data = qs.stringify({
      'username': inputtext.username,
      'password': inputtext.password 
    });
    const config = {
      method: 'post',
      url: 'https://wadiacsi1.cognitonetworks.com/cognito/gettoken',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Cookie': 'sessionid=yu1hkififix57f44rpsgpvltfz5hd4b6'
      },
      data : data
    };

   
    axios(config)
    .then(function (response) {
      const d=JSON.stringify(response.data);
      if(response.data.success){
        localStorage.setItem("role","assem")
        localStorage.setItem("aot","true")
        localStorage.setItem('username','assembly');
        history('/ass');
      }else{
        settr("Username or password is Incorrect");
      }
    })

    .catch(function (error) {
      console.log(error);
    });

    


    
  }
  
  }
  
  const Eye=()=>{
  if(password=="password"){
  setpassword("text");
  seteye(false);
  settype(true);
  }
  else{
  setpassword("password");
  seteye(true);
  settype(false);
  }
  }
  
  
  return(
  <>
      <div className="container" style={{backgroundColor: "#c1d6f7"}}>
          <div className="card">
              <div className="text">
                  
                  <p style={{color: "black"}}>Sign In</p>
              </div>
              <form onSubmit={submitForm}>
                  <div className="input-text">
                      <input type="text" className={` ${warnusername ? "warning" : "" }`} placeholder="Enter your Username" value={inputtext.username} onChange={inputEvent} name="username" />
                      <i className="fa fa-envelope"></i>
  
                  </div>
                  <div className="input-text">
                      <input type={password} className={` ${warnpassword ? "warning" : "" } ${type ? "type_password" : "" }`} placeholder="Enter your password" value={inputtext.password} onChange={inputEvent} name="password" />
                      <i className="fa fa-lock"></i>
                      <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i>
                  </div>
                  <div style={{fontSize:"15px",color:"red"}} >{tr}</div>
                  <div className="buttons">
                      <button type="submit">Sign in</button>
                  </div>
                  
              </form>
          </div>
      </div>
  </> 
  );
  }

  export default LoginAsse;
  
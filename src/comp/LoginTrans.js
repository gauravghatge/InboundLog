import React, { Component,useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const LoginTrans=()=> {

    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
      });
      

      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
      
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
      const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
        return (
            <div style={{width:"100vw",height:"100vh",backgroundColor:"grey"}}>
            <form style={{width:"40%",marginLeft:"30%",paddingTop:"10%"}}>
                <h3>Transporter Sign In</h3>
            
                <div className="form-group">
                    <label>User ID</label>
                    <input className="form-control" required ={true} placeholder="Enter User ID"  />
                </div>

                <div className="form-group">
                <InputLabel htmlFor="standard-adornment-password">
        Enter your Password
      </InputLabel>
      <Input
        type={values.showPassword ? "text" : "password"}
        onChange={handlePasswordChange("password")}
        value={values.password}
        required={true}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
                </div>

                

                <button type="submit"  className="btn btn-primary btn-block">Submit</button>
                
            </form>
            </div>
        );
    
}

export default LoginTrans;
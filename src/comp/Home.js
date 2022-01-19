import React, { Component } from 'react'
import { Outlet, Link } from "react-router-dom";
import Table from "./Table"
import Tab from "./Tab"
import AssemblyAreaCode from "./AssemblyAreaCode"
import Mapper from "./Mapper"

export default class Home extends Component {
    render() {
        return (
            
      <>
        
        <nav>
        <ul>
          <li>
            <Link to="/Warehouselogin">Store Keeper Login</Link>
          </li>
          <li>
            <Link to="/Assemblylogin">Assembler Login</Link>
          </li>
          <li>
              
            <Link to="/Transporterlogin">Transporter Login</Link>
          </li>
        </ul>
      </nav>
      
      
      
      
       
      
      </>
    
        
        )   
}

}

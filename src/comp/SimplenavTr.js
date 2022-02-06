import React from 'react'
import { useNavigate } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
  

class SimplenavTr extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                <div className="col-md-12" style={{display:"flex"}}>

<a style={{width:"20%",backgroundColor:" #e6e6e6",paddingTop:"5px"}}> <img src='./cognito_logo.png' href="/" style={ { height:"50px", width:"150px", margin:"0px"}}></img></a>   
 <Navbar style = {{backgroundColor:"#4a87e8",width:"80%" }} variant="dark" expand="lg" sticky="top" >
    
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse className="justify-content-end">
                                    <Nav className="mr-auto" >
                                    <Nav.Link href="/transporterhome">Home</Nav.Link>
                                    
                                    <Button href='/'>Logout</Button>
                                    </Nav>
                                    
                                </Navbar.Collapse>
                            </Navbar>
                         
                            
                        
                    </div>
                </div>
            </div>
        )  
    }
}

export default SimplenavTr
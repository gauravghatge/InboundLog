import React from 'react'
import { useNavigate } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import { withCookies } from "react-cookie";  

class MainNavAssem extends React.Component{
   

    state = {  // getting the cookie
        user: this.props.cookies.get("user") || ""
      };
    


    render(){
        const { user } = this.state
        console.log(this.props.data);
        return(
            <div>
                <div className="row">
                <div className="col-md-12" style={{display:"flex"}}>

<a style={{width:"20%",backgroundColor:" #ffff",paddingTop:"5px"}}> <img src='./logo1.jpeg' href="/" style={ { height:"50px", width:"150px", margin:"0px"}}></img></a>   
 <Navbar style = {{backgroundColor:"#4a87e8",width:"80%" }} variant="dark" expand="lg" sticky="top" >
    
     <h4 style = {{color:"#fff", marginLeft:"20%"}}> Assembly Area { user}</h4>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse className="justify-content-end">
                                    <Nav className="mr-auto" >
                                   
                                    <Nav.Link href="/assemblyorderlog" style={{Color:"white"}}>Order Log</Nav.Link>
                                    <Button href='/' >Logout</Button>
                                    </Nav>
                                    
                                </Navbar.Collapse>
                            </Navbar>
                         
                            
                        
                    </div>
                </div>
            </div>
        )  
    }
}

export default withCookies(MainNavAssem);
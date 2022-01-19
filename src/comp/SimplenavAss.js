import React from 'react'

  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
  

class SimplenavAss extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
                                <Navbar.Brand href="/">Smart Inbound Logistics</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse className="justify-content-end">
                                    <Nav className="mr-auto" >
                                    <Nav.Link href="/assemblyhome">Home</Nav.Link>
                                    
                                    <Button >Logout</Button>
                                    </Nav>
                                    
                                </Navbar.Collapse>
                            </Navbar>
                         
                            
                        
                    </div>
                </div>
            </div>
        )  
    }
}

export default SimplenavAss
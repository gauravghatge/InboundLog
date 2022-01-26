import React from 'react'

  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
  

class MainNavAssem extends React.Component{

    render(){
        console.log(this.props.data);
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
                                <Navbar.Brand href="/">Smart Inbound Logistics</Navbar.Brand>
                                <h2 style = {{color:"#fff", marginLeft:"20%"}}> Assembly {this.props.data}</h2>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse className="justify-content-end">
                                    <Nav className="mr-auto" >
                                   
                                    <Nav.Link href="/assemblyorderlog">Order Log</Nav.Link>
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

export default MainNavAssem;
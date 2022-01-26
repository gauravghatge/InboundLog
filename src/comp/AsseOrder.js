import React, { Component } from 'react'
import SimplenavAss from "./SimplenavAss"
import Table from "./Table"
export default class AsseOrder extends Component {
    render() {
        return (
            <>
                <SimplenavAss></SimplenavAss>
                <div > 

                
                <div>
                <h3>Order Log</h3>
                </div>
                <div style={{overflowX:"auto",width:"70%",overflowY:"auto",height:"50%",marginRight:"15%",marginLeft:"15%"}}>
                    <Table/></div>        
                </div>
                </>
        )
    }
}

import React, { Component } from 'react'
import SimplenavAss from "./SimplenavAss"
import Table from "./Table"
export default class AsseOrder extends Component {
    render() {
        return (
            <div>
                <SimplenavAss></SimplenavAss>
                <div>
                <h3>Order Log</h3>
                </div>
                <Table />            
                </div>
        )
    }
}

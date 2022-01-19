import React, { Component } from 'react'
import Table from './Table'
import SimplenavTr from './SimplenavTr'

export default class TrOrder extends Component {
    render() {
        return (
            <div>
                <SimplenavTr></SimplenavTr>
                <div><h3>Order Log</h3></div>
                <Table></Table>
            </div>
        )
    }
}

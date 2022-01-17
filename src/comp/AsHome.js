import React, { Component } from 'react'
import Table from './Table'
import Mapper from './Mapper'

export default class AsHome extends Component {
    render() {
        return (
            <div>
                <Mapper />
                <Table />
            </div>
        )
    }
}

import React, { Component } from 'react'
import TotalOrd from './TotalOrd'
import Mapper from './Mapper'
import MainNavAssem from './MainNavAssem'
export default class AsHome extends Component {
    render() {
        return (
            <div>
                <MainNavAssem />
                <div>
                    <h3>Parking Area</h3>
                </div>
                <Mapper />
                <div>
                <h3>Current Orders</h3>
                </div>
                <TotalOrd />
            </div>
        )
    }
}

import React, { Component } from 'react'
import MainNavTr from './MainNavTr'
import Mapper from './Mapper'
import TabTr from './TabTr'

const TrHome=()=> {
            return (
            <div>
                <MainNavTr></MainNavTr>
                <div><h1>Parking Area</h1></div>
                <Mapper />
                <div><h1>Current Orders</h1></div>
                <TabTr></TabTr>
                
            </div>
        )
    
}
export default TrHome;

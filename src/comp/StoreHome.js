import React, { Component } from 'react'
import MainNavStore from './MainNavStore'
import Mapper from './Mapper'
import TabStore from './TabStore'

export default class StoreHome extends Component {
    render() {
        return (
            <div>
                <MainNavStore> </MainNavStore>
                <div><h2>Parking Area</h2></div>
                <Mapper></Mapper>
                <div>PickUp Notification</div>
                <TabStore></TabStore>
            </div>
        )
    }
}

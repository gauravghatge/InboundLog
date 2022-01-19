import React, { Component } from 'react'
import MainNavStore from './MainNavStore'
import Mapper from './Mapper'
import TabStore from './TabStore'

export default class StoreHome extends Component {
    render() {
        return (
            <div>
                <MainNavStore> </MainNavStore>
                <div>Parking Area</div>
                <Mapper></Mapper>
                <div>PickUp Notification</div>
                <TabStore></TabStore>
            </div>
        )
    }
}

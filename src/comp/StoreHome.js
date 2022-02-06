import React, { Component } from 'react'
import TabStore from './TabStore'
import Mapper from './Mapper'
import MainNavStore from './MainNavStore'

export default class TrHome extends Component {
    render() {
        return (
            <>
                <MainNavStore />
                <div style={{width:"100%",height:"100vh",display:"flex",paddingTop:"5"}}>
                <div style={{width:"50%"}}>
                <Mapper />
                    </div>
                    <div style={{width:"50%"}}>
                    <TabStore />
                </div>
                </div>
                
            </>
        )
    }
}

import React, { Component } from 'react'
import TabTr from './TabTr'
import Mapper from './Mapper'
import MainNavTr from './MainNavTr'
export default class TrHome extends Component {
    render() {
        return (
            <>
                <MainNavTr />
                <div style={{width:"100%",display:"flex",paddingTop:"5"}}>
                <div style={{width:"50%"}}>
                <Mapper />
                    </div>
                    <div style={{width:"50%"}}>
                    <TabTr />
                </div>
                </div>
                
            </>
        )
    }
}

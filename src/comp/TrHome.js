import React, { Component } from 'react'
import TabTr from './TabTr'
import Mapper from './Mapper'
import MainNavTr from './MainNavTr'
export default class TrHome extends Component {
    
    render() {
        console.log(localStorage.getItem('username'));
        return (
            <>
                <MainNavTr />
                <div style={{width:"100%",height:"100vh",display:"flex",paddingTop:"5"}}>
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

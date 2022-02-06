import React, { Component } from 'react'
import TabStore from './TabStore'
import Mapper from './Mapper'
import MainNavStore from './MainNavStore'
import { useNavigate } from "react-router-dom";
export default class TrHome extends Component {
    render() {
        return (
            <>
                <MainNavStore />
                <div style={{width:"100%",display:"flex",paddingTop:"5"}}>
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

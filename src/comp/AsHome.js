import React, { Component } from 'react'
import TotalOrd from './TotalOrd'
import Mapper from './Mapper'
import MainNavAssem from './MainNavAssem'
import {useLocation} from 'react-router-dom';
 const AsHome =()=> {
    const location = useLocation();
    console.log(location.state.name);
        return (
            <>
            
                <MainNavAssem data={location.state.name}/>
                <div style={{width:"100%",display:"flex",paddingTop:"5"}}>
                <div style={{width:"50%"}}>
                <Mapper />
                    </div>
                    <div style={{width:"50%"}}>
                    <TotalOrd />
                </div>
                </div>
                
            </>
        )
    
}
export default AsHome
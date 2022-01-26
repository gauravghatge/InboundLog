import React, { Component } from 'react'

const tableStyle = {
    border: '1px solid black',
    borderCollapse: 'collapse',
    textAlign: 'center',
    
}

const tdStyle = {
    border: '1px solid #85C1E9',
    background: 'white',
    padding: '5px'
};

const thStyle = {
    border: '1px solid #3498DB',
    background: '#3498DB',
    color: 'white',
    padding: '5px',
    marginLeft:'auto',
    marginRight:'auto' 
     
};




 const TotalOrd =()=> {
    
       
  const data = [
    { id: 1,areacode:'P1',asscode:'25', assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 2,areacode:'P2', assetinf: 'Kate',asscode:'25',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 3, areacode:'P4',assetinf: 'Kate',  asscode:'25',placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 4, areacode:'P6',assetinf: 'Kate',asscode:'25',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 5,areacode:'P1', assetinf: 'Kate',  asscode:'25',placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 6,areacode:'P2', assetinf: 'Kate', asscode:'25', placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 7, areacode:'P4',assetinf: 'Kate',asscode:'25',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 8, areacode:'P6',assetinf: 'Kate', asscode:'25', placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 9,areacode:'P1', assetinf: 'Kate', asscode:'25', placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 10,areacode:'P2', assetinf: 'Kate', asscode:'25', placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 11, areacode:'P4',assetinf: 'Kate', asscode:'25', placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 12, areacode:'P6',assetinf: 'Kate', asscode:'25', placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' }
  ];
  
        return (
       <> 
            <h3>Current Orders</h3>
            <div style={{overflowX:"auto",width:"100%",overflowY:"auto",height:"450px"}}>
                <table  style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Order ID</th>
                    <th style={thStyle}>Parking area code</th>
                    <th style={thStyle}>Asset Info</th>
                    
                    <th style={thStyle}>Assembly Area Code</th>
                    <th style={thStyle}>Pickup Status</th>
                    <th style={thStyle}>Delivery Status</th>
                </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td style={tdStyle}>{item.id}</td>
                                <td style={tdStyle} >{item.areacode}</td>
                                <td style={tdStyle} >{item.assetinf}</td>
                                <td style={tdStyle} >{item.asscode}</td>
                                
                                
                                <td style={tdStyle}><button>YES</button></td>
                                <td style={tdStyle}><button>YES</button></td>
                            </tr>
                            
                        ))
                    }
                </tbody>
        
            </table>
            </div></> 
        )
 }          
    

export default TotalOrd;

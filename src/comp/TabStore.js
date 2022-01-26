import React, { Component } from 'react'

const tableStyle = {
    border: '1px solid black',
    borderCollapse: 'collapse',
    textAlign: 'center',
    
};

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




 const TabTr =()=> {
    
       
  const data = [
    { id: 1, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 2, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 3, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 4, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 5, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 6, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 7, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 8, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 9, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 10, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 11, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 12, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' }
  ];
  
        return (
            <>
    <h3>Pickup Notification</h3>
    <div style={{overflowX:"auto",overflowY:"auto",height:"450px",marginLeft:"100px"}}>
                <table  style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Trolly ID</th>
                    <th style={thStyle}>Assembly Location</th>
                    <th style={thStyle}>Pickup Confirmation</th>
                    
                </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td style={tdStyle}>{item.id}</td>
                                <td style={tdStyle} >{item.assetinf}</td>
                                <td style={tdStyle}><button>YES</button></td>
                            </tr>
                            
                        ))
                    }
                </tbody>
        
            </table>
            
            </div></>
        )
 
           
    
}
export default TabTr;

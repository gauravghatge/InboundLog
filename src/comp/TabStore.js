import React, { Component } from 'react'

const tableStyle = {
    border: '1px solid black',
    borderCollapse: 'collapse',
    textAlign: 'center',
    width: '100%'
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
    padding: '5px'
};




 const TabTr =()=> {
    
       
  const data = [
    { id: 1, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 2, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 3, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 4, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' }
  ];
  
        return (
            <div>
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
            </div>
        )
 
           
    
}
export default TabTr;

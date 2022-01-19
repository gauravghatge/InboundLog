import React, { Component } from 'react'
import TabScal from "./TabScal"
 const Tab =()=> {

  const data = [
    { id: 1, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 2, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 3, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 4, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' }
  ];

        return (
            <div>
                <table style={{width:"100%", }}> 
                <thead style={{width:"100%"}}>
                <tr>
                    <th>Product Name</th>
                    <th>Product Category</th>
                    <th>Unit Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody style={{width:"100%"}}>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.assetinf}</td>
                                <td><button >ack</button></td>
                            </tr>
                        ))
                    }
                </tbody>
        
            </table>
            </div>
        )
    
}
export default Tab;

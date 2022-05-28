import React, { Component,useEffect,useState

 } from 'react'
import axios from 'axios';
const tableStyle = {
    border: '1px solid black',
    borderCollapse: 'collapse',
    textAlign: 'center',
    width: '50%',
    
    marginLeft:'auto',
    marginRight:'auto'
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
    marginRight:'auto',
    position:'sticky',
    top:'0'  
};




const Table=()=> {
const [allorders, setorders] = useState([])

useEffect(()=>{
var config = {
  method: 'get',
  url: 'https://wadiacsi1.cognitonetworks.com/cognito/entityweb/strdatastreamTimeGraph/2204/?entity_id=2204&name=Order_Inf&start_date=2021-12-31%2011:17:00&end_date=2022-02-07%2007:05:50',
  headers: { 
    'Authorization': 'K9MkyEo5fM0YracivwW3 5xn-c646006da1934235e084 81 111'
  }
};


axios(config)
.then(function (response) {
  console.log((response.data));
  const data=[]
  var data1 = {}
                response.data.forEach(
                    doc=>{
                        var s = doc.value;
                        var match = s.split(';')
                        let p = {orderid:match[0], pa:match[1],assar:match[2], ai:match[3],pt:match[4],at:match[5],dt:match[6]};
                        data1[match[0]] = p
                    }
                )
                        var expData = []
                        console.log(data1)
                        Object.keys(data1).forEach(d=>expData.push(data1[d]))
                        
                        function compare( a, b ) {
                            if ( a.pt > b.pt ){
                              return -1;
                            }
                            if ( a.pt < b.pt ){
                              return 1;
                            }
                            return 0;
                          }
                          
                          expData.sort( compare );



                        setorders(expData)
               

})
.catch(function (error) {
  console.log(error);
});

},[])

       
//   const data = [
//     { id: 1,areacode:'P1', assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
//     { id: 2,areacode:'P2', assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
//     { id: 3, areacode:'P4',assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
//     { id: 4, areacode:'P6',assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
//     { id: 5,areacode:'P1', assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
//     { id: 6,areacode:'P2', assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
//     { id: 7, areacode:'P4',assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
//     { id: 8, areacode:'P6',assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
//     { id: 9,areacode:'P1', assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
//     { id: 10,areacode:'P2', assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
//     { id: 11, areacode:'P4',assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
//     { id: 12, areacode:'P6',assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' }
//   ];
  
        return (
       <> 
            
            <div style={{overflowX:"auto",width:"100%",overflowY:"auto",height:"80vh"}}>
                <table  style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Order ID</th>
                    <th style={thStyle}>Parking Spot</th>
                    <th style={thStyle}>Assembly Area Code</th>
                    <th style={thStyle}>Asset Info</th>
                    
                    <th style={thStyle}>Order Placed TimeStamp</th>
                    <th style={thStyle}>Order Acknowledge TimeStamp</th>
                    
                    <th style={thStyle}>Order Accepted By</th>
                    <th style={thStyle}>Order Delivery TimeStamp</th>
                    
                    
                </tr>
                </thead>
                <tbody>
                    {
                        allorders.map((item) => (
                            <tr key={item.orderid}>
                                <td style={tdStyle}>{item.orderid}</td>
                                <td style={tdStyle} >{item.pa}</td>
                                 <td style={tdStyle} >{item.assar}</td>
                                
                                <td style={tdStyle}>{item.ai}</td>
                                <td style={tdStyle}>{item.pt}</td>
                                <td style={tdStyle}>{item.at}</td>
                                <td style={tdStyle}>{item.assar}</td>
                                <td style={tdStyle}>{item.dt}</td> 
                            </tr>
                            
                        ))
                    }
                </tbody>
        
            </table>
            </div></> 
        )
 }          
    

export default Table;

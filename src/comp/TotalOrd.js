import React, { Component,useEffect,useState } from 'react'
import axios from 'axios'
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
     
};




 const TotalOrd =()=> {
const [allorders, setorders] = useState([])
 
 const sendord=(item)=>{
    var data1 = { "entityid":"2201",
    "entityName":"Order_Inf",
        "entityTag":"Generic",
    "gatewayid":"Sub_Assembly_Parking",
        "status":false,
          "datastreams":[{ "name":"Order_Inf",
                      "value":`${item.orderid};${item.park};${item.aa};${item.ai};${item.pt};${item.at};${new Date().toDateString()}`,
                      "units":"",            "ContentFormat":"",
                      "type": "String"        }      ]};
var config = {
method: 'post',
url: 'https://wadiacsi1.cognitonetworks.com/cognito/entitycore/2201',
headers: { 
'Apikey': 'K9MkyEo5fM0YracivwW3', 
'Authorization': 'K9MkyEo5fM0YracivwW3 5xn-c646006da1934235e084 81 111', 
'Content-Type': 'text/plain'
},
data : data1
};

axios(config)
.then(function (response) {
console.log(JSON.stringify(response.data));
})
.catch(function (error) {
console.log(error);
});

 }
 
    useEffect(()=>{
        var config = {
          method: 'get',
          url: 'https://wadiacsi1.cognitonetworks.com/cognito/entityweb/strdatastreamTimeGraph/2203/?entity_id=2203&name=Current_Order&start_date=2021-12-31%2011:17:00&end_date=2022-02-07%2007:05:50',
          headers: { 
            'Authorization': 'K9MkyEo5fM0YracivwW3 5xn-c646006da1934235e084 81 111'
          }
        };
        
        axios(config)
        .then(function (response) {
          console.log((response.data));
          const data=[]
                        response.data.forEach(
                            doc=>{
                                var s = doc.value;
                                var match = s.split(';')
                                let p = {orderid:match[0], aa:match[1],ai:match[2], pt:match[3],at:match[4],st:match[5],park:match[6]};
                                data.push(p)
                            }
                        )
                        console.log((data));
                        
                        setorders(data)
                       
        
        })
        .catch(function (error) {
          console.log(error);
        });
        
        },[])

          return (
       <> 
            <h3>Current Orders</h3>
            <div style={{overflowX:"auto",width:"100%",overflowY:"auto",height:"450px"}}>
                <table  style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Order ID</th>
                    <th style={thStyle}>Assembly Area Code</th>
                    <th style={thStyle}>Asset Info</th>
                    
                    <th style={thStyle}>Order Placed TImeStamp</th>
                    <th style={thStyle}>Order Acknowledge TimeStamp</th>
                    <th style={thStyle}>Delivery Confirmation Status</th>
                </tr>
                </thead>
                <tbody>
                    {
                        allorders.map((item) => (
                            <tr key={item.id}>
                                <td style={tdStyle}>{item.orderid}</td>
                                <td style={tdStyle} >{item.aa}</td>
                                <td style={tdStyle} >{item.ai}</td>
                                <td style={tdStyle} >{item.pt}</td>
                                
                                <td style={tdStyle}>{item.at}</td>
                               
                                <td style={tdStyle} ><button onClick={sendord(item)}>YES</button></td>
                            </tr>
                            
                        ))
                    }
                </tbody>
        
            </table>
            </div></> 
        )
 }          
    

export default TotalOrd;

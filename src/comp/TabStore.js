import React, { Component,useState,useEffect } from 'react'
import axios from 'axios';

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




 const TabStore =()=> {
    const sendord =(item)=>{

        var cc = new Intl.DateTimeFormat('en-US', {year: 'numeric',day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.now())
        var data4 = { "entityid":"2205",
        "entityName":"Trolley_Pickup",
        "entityTag":"Generic",
        "gatewayid":"Sub_Assembly_Parking",
        "status":false,
        "datastreams":[{ "name":"Trolley_Pickup",
                              "value":`${item.orderid};${item.aa};${item.notits};${cc.slice(3,5)+'/'+cc.slice(0,2) +'/'+cc.slice(6,23) };${item.park}`,
                              "units":"",            "ContentFormat":"",
                              "type": "String"        }      ]};
        var config = {
        method: 'post',
        url: 'https://wadiacsi1.cognitonetworks.com/cognito/entitycore/2205',
          headers: { 
            'Apikey': 'K9MkyEo5fM0YracivwW3', 
            'Authorization': 'K9MkyEo5fM0YracivwW3 5xn-c646006da1934235e084 81 111', 
            'Content-Type': 'text/plain'
          },
          data : data4
        };
        
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          console.log("Data send for PickUp Notification")
          
        })
        .catch(function (error) {
          console.log(error);
          
        });





    }
const [allorders, setorders] = useState([]) 
useEffect(()=>{
    var config = {
      method: 'get',
      url: 'https://wadiacsi1.cognitonetworks.com/cognito/entityweb/strdatastreamTimeGraph/2205/?entity_id=2205&name=Trolley_Pickup&start_date=2021-12-31%2011:17:00&end_date=2022-02-07%2007:05:50',
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



                            //item.orderid};${item.aa};${cc.slice(3,5)+'/'+cc.slice(0,2) +'/'+cc.slice(6,23) };Yes;${item.park}

                            let p = {orderid:match[0], aa:match[1],notits:match[2],pickst:match[3],park:match[4]};
                            data.push(p)
                        }
                    )
                    console.log((data));
                    
                    var data1 = {}
                    response.data.forEach(
                        doc=>{
                            var s = doc.value;
                            var match = s.split(';')
                            let p = {orderid:match[0], aa:match[1],notits:match[2],pickst:match[3],park:match[4]};
                            data1[match[0]] = p
                        }
                    )

                    
                    console.log("Kedar1" ,data1)


                    var expData1 = []
                    console.log(data)
                    Object.keys(data1).forEach(d=>expData1.push(data1[d]))                        
                    

                    console.log("Kedar2" ,expData1)
                    function compare( a, b ) {
                      if ( a.notits > b.notits ){
                        return 1;
                      }
                      if ( a.notits < b.notits ){
                        return -1;
                      }
                      return 0;
                    }
                    
                    expData1.sort( compare );
                    setorders(expData1)
                    
                   
    
    })
    .catch(function (error) {
      console.log(error);
    });
    
    },[])

       
 
        return (
            <>
    <h3>Pickup Notification</h3>
    <div style={{overflowX:"auto",overflowY:"auto",height:"450px",marginLeft:"100px"}}>
                <table  style={tableStyle}>
                <thead>
                <tr>
                    
                    <th style={thStyle}>Order ID</th>
                    <th style={thStyle}>Assembly Location</th>
                    <th style={thStyle}>PickUp Notification</th>
                    <th style={thStyle}>Pickup Confirmation</th>
                    
                </tr>
                </thead>
                <tbody>
                    {
                        allorders.map((item) => (
                            <tr key={item.id}>
                                
                                <td style={tdStyle} >{item.orderid}</td>
                                <td style={tdStyle} >{item.aa}</td>
                                <td style={tdStyle} >{item.notits}</td>
                                <td style={tdStyle} >  {item.pickst =="Yes"? <button onClick={()=> sendord(item)}>Yes</button> : <p>{item.pickst}</p>}   </td>
                            </tr>
                            
                        ))
                    }
                </tbody>
        
            </table>
            
            </div></>
        )
 
           
    
}
export default TabStore;

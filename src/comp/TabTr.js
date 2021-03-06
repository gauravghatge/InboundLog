import React, { Component,useState,useEffect } from 'react'
import axios from 'axios';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { useCookies } from "react-cookie";
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
    marginRight:'auto',
    position:'sticky',
    top:'0' 
     
};


 const TotalOrd =()=> {

  const [cookies, setCookie] = useCookies();
  
  console.log("Here is the Timeout")
console.log(cookies.timeout)
  const sendord=(item)=>{
    var c = new Intl.DateTimeFormat('en-US', {year: 'numeric',day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.now())
        var data = { "entityid":"2203",
        "entityName":"Curr_Order1",
            "entityTag":"Generic",
        "gatewayid":"Sub_Assembly_Parking",
            "status":false,
              "datastreams":[{ "name":"Current_Order",
                          "value":`${item.orderid};${item.aa};${item.ai};${item.pt};${c.slice(3,5)+'/'+c.slice(0,2) +'/'+c.slice(6,23)};No;${item.park}`,
                          "units":"",            "ContentFormat":"",
                          "type": "String"        }      ]};
    var config = {
  method: 'post',
  url: 'https://wadiacsi1.cognitonetworks.com/cognito/entitycore/2203',
  headers: { 
    'Apikey': 'K9MkyEo5fM0YracivwW3', 
    'Authorization': 'K9MkyEo5fM0YracivwW3 5xn-c646006da1934235e084 81 111', 
    'Content-Type': 'text/plain'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
  
}); 
window.location.reload(false);
     }




    
       
//   const data = [
//     { id: 1,areacode:'P1',asscode:'25', assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
//     { id: 2,areacode:'P2', assetinf: 'Kate',asscode:'25',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
//     { id: 3, areacode:'P4',assetinf: 'Kate',  asscode:'25',placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
//     { id: 4, areacode:'P6',assetinf: 'Kate',asscode:'25',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
//     { id: 5,areacode:'P1', assetinf: 'Kate',  asscode:'25',placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
//     { id: 6,areacode:'P2', assetinf: 'Kate', asscode:'25', placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
//     { id: 7, areacode:'P4',assetinf: 'Kate',asscode:'25',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
//     { id: 8, areacode:'P6',assetinf: 'Kate', asscode:'25', placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
//     { id: 9,areacode:'P1', assetinf: 'Kate', asscode:'25', placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
//     { id: 10,areacode:'P2', assetinf: 'Kate', asscode:'25', placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
//     { id: 11, areacode:'P4',assetinf: 'Kate', asscode:'25', placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
//     { id: 12, areacode:'P6',assetinf: 'Kate', asscode:'25', placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' }
//   ];
  
const [allorders, setorders] = useState([])


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
      var data1 = {}
                    response.data.forEach(
                        doc=>{
                            var s = doc.value;
                            var match = s.split(';')
                            let p = {orderid:match[0], aa:match[1],ai:match[2],pt:match[3],at:match[4],park:match[6]};
                            data1[match[0]] = p
                        }
                    )
                    
                        var expData = []
                        console.log(data)
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
    window.setInterval(refresh, cookies.timeout*1000);
     

    },[])

    
    const refresh=() => {
      
      window .location.reload();
  }





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
                </tr>
                </thead>
                <tbody>
                    {
                        allorders.map((item) => (
                            <tr key={item.id}>
                                <td style={tdStyle}>{item.orderid}</td>
                                <td style={tdStyle} >{item.park}</td>
                                <td style={tdStyle} >{item.ai}</td>
                                <td style={tdStyle} >{item.aa}</td>
                                
                                
                                <td style={tdStyle}> {item.at =="Yet to acknowledge"? <button onClick={()=> sendord(item)}>Yes</button> : <p>{item.at}</p>}</td>
         
                            </tr>
                            
                        ))
                    }
                </tbody>
        
            </table>
            </div></> 
        )
 }          
    

export default TotalOrd;

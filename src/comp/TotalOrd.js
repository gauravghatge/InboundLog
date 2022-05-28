import React, { Component,useEffect,useState } from 'react'
import axios from 'axios'
import { useCookies } from "react-cookie";
import { withCookies } from "react-cookie";  


const tableStyle = {
    border: '1px solid black',
    borderCollapse: 'collapse',
    textAlign: 'center',
   
}

var ko = "white"
var clr  = "black"
const tdStyle = {
    border: '1px solid #85C1E9',
    background: `${ko}`,
    padding: '5px',
    color: `${clr}`

};

const thStyle = {
    border: '1px solid #3498DB',
    background: '#3498DB',
    color: 'white',
    padding: '5px',
    position:'sticky',
    top:'0' 
     
};




 const TotalOrd =()=> {
const [allorders, setorders] = useState([])
const[streams,setstreams] = useState([]);
const [cookies, setCookie] = useCookies();

console.log("Here is the Timeout")
console.log(cookies.timeout)
 const sendord=(item)=>{
     
    var c = new Intl.DateTimeFormat('en-US', {year: 'numeric',day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.now())
    var data1 = { "entityid":"2204",
    "entityName":"Order_Inf6",
        "entityTag":"Generic",
    "gatewayid":"Sub_Assembly_Parking",
        "status":false,
          "datastreams":[{ "name":"Order_Inf",
                      "value":`${item.orderid};${item.park};${item.aa};${item.ai};${item.pt};${item.at};${c.slice(3,5)+'/'+c.slice(0,2) +'/'+c.slice(6,23)}`,
                      "units":"",            "ContentFormat":"",
                      "type": "String"        }      ]};
                      var config = {
                        method: 'post',
                        url: 'https://wadiacsi1.cognitonetworks.com/cognito/entitycore/2204',
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
console.log("Data send")
})
.catch(function (error) {
console.log(error);
});


//adding delivery status
var cc = new Intl.DateTimeFormat('en-US', {year: 'numeric',day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.now())
var data3 = { "entityid":"2203",
"entityName":"Curr_Order1",
"entityTag":"Generic",
"gatewayid":"Sub_Assembly_Parking",
"status":false,
"datastreams":[{ "name":"Current_Order",
                      "value":`${item.orderid};${item.aa};${item.ai};${item.pt};${item.at};${cc.slice(3,5)+'/'+cc.slice(0,2) +'/'+cc.slice(6,23)};${item.park}`,
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
data : data3
};

axios(config)
.then(function (response) {
console.log(JSON.stringify(response.data));
console.log("Data send for conf")
})
.catch(function (error) {
console.log(error);

});




// Sending Trolley Status
alert("Visible")
var cc = new Intl.DateTimeFormat('en-US', {year: 'numeric',day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.now())
var data4 = { "entityid":"2205",
"entityName":"Trolley_Pickup",
"entityTag":"Generic",
"gatewayid":"Sub_Assembly_Parking",
"status":false,
"datastreams":[{ "name":"Trolley_Pickup",
                      "value":`${item.orderid};${item.aa};${cc.slice(3,5)+'/'+cc.slice(0,2) +'/'+cc.slice(6,23) };Yes;${item.park}`,
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








//adding to ords for filtering


var data2 = { "entityid":"2206",
"entityName":"Ordconfirm",
    "entityTag":"Generic",
"gatewayid":"Sub_Assembly_Parking",
    "status":false,
      "datastreams":[{ "name":"ords",
                  "value":`${item.orderid}`,
                  "units":"",            "ContentFormat":"",
                  "type": "String"        }      ]};
var config = {
method: 'post',
url: 'https://wadiacsi1.cognitonetworks.com/cognito/entitycore/2206',
headers: { 
'Apikey': 'K9MkyEo5fM0YracivwW3', 
'Authorization': 'K9MkyEo5fM0YracivwW3 5xn-c646006da1934235e084 81 111', 
'Content-Type': 'text/plain'
},
data : data2
};

axios(config)
.then(function (response) {
console.log(JSON.stringify(response.data));
console.log("Data sent to ords")
})
.catch(function (error) {
console.log(error);
});

window.location.reload(false);
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
          var data1 = {}
          const m = new Map()
                        response.data.forEach(
                            doc=>{
                                
                                var s = doc.value;
                                var match = s.split(';');
                                
                                    console.log(match[0]);
                                    let p = {orderid:match[0], aa:match[1],ai:match[2], pt:match[3],at:match[4],st:match[5],park:match[6]};
                                       
                                   data1[match[0]] = p
                                
                            }
                        )
                        
                       
                        data.forEach(
                            d => {
                                m.set(d.orderid,d)
                            }
                        )


                        let final_data = [];
                        Array.from(m.entries()).map((entry) => {
                            const [key, value] = entry;
                            final_data.push(value);
                        })



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

                          var filtData = [ ]
                          expData.filter(ord => ord.aa == cookies.user ).map(fil => filtData.push(fil))
                        

                        setorders(filtData)
        })
        .catch(function (error) {
          console.log(error);
        });

        window.setInterval(refresh, cookies.timeout*1000);
    
        
        },[])

        
    const refresh=() => {
      
      window .location.reload();
  }


  var c = new Intl.DateTimeFormat('en-US', {year: 'numeric',day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.now())
  var comp = c.slice(3,5)+'/'+c.slice(0,2) +'/'+c.slice(6,10)
  console.log(comp)  
          return (<> 
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
                            <tr  key={item.id}>
                                
                                <td style={{border: '1px solid #85C1E9',
    background: ((comp != item.pt.slice(0,10)) && (item.st=="No") )?"Red":"white",
    padding: '5px',
    color: ((comp != item.pt.slice(0,10)) && (item.st=="No") )?"white":"black"}}>{item.orderid}</td>
                                <td style={{border: '1px solid #85C1E9',
    background: ((comp != item.pt.slice(0,10)) && (item.st=="No") )?"Red":"white",
    padding: '5px',
    color: ((comp != item.pt.slice(0,10)) && (item.st=="No") )?"white":"black"}} >{item.aa}</td>
                                <td style ={{border: '1px solid #85C1E9',
    background: ((comp != item.pt.slice(0,10)) && (item.st=="No") )?"Red":"white",
    padding: '5px',
    color: ((comp != item.pt.slice(0,10)) && (item.st=="No") )?"white":"black"}}>{item.ai}</td>
                                <td style={{border: '1px solid #85C1E9',
    background: ((comp != item.pt.slice(0,10)) && (item.st=="No") )?"Red":"white",
    padding: '5px',
    color: ((comp != item.pt.slice(0,10)) && (item.st=="No") )?"white":"black"}} >{item.pt}</td>

                                <td style={{border: '1px solid #85C1E9',
    background: ((comp != item.pt.slice(0,10)) && (item.st=="No") )?"Red":"white",
    padding: '5px',
    color: ((comp != item.pt.slice(0,10)) && (item.st=="No") )?"white":"black"}}>{item.at}</td>
    
                                <td style={tdStyle}  > {item.st=="No"?  < button disabled={(item.at=="Yet to acknowledge") } onClick={()=> sendord(item)}> Yes </button> : <p>{item.st}</p>}</td> 
                            </tr>
                            
                        ))
                    }
                </tbody>
        
            </table>
            </div></> 
        )
 }          
export default  withCookies(TotalOrd);
// 
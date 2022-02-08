import React,{useEffect,useState} from 'react';
import ImageMapper from 'react-img-mapper';
import axios from 'axios';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { confirm } from "react-confirm-box";


      
      
  
const clicked=()=>{
  alert("Hello World!");
}
const clickedon=(area)=>{
  console.log(area);
  clicked();
}
  const MapperAsse = props => {
    

    const URL = '/parking.jpeg';
  
  const [y, sety] = useState(36);
  const [x2, setx2] = useState(45);
  const [y2, sety2] = useState(81);
  const [sp, setsp] = useState([])
  const [Loading,setLoading]=useState(true)
  useEffect(()=>{
    var config = {
      method: 'get',
      url: 'https://wadiacsi1.cognitonetworks.com/cognito/entityweb/strdatastreamTimeGraph/2195/?entity_id=2195&name=Parking_Inf&start_date=2021-12-31%2011:17:00&end_date=2022-02-07%2007:05:50',
      headers: { 
        'Authorization': 'K9MkyEo5fM0YracivwW3 5xn-c646006da1934235e084 81 111'
      }
    };
    const data=[]
    axios(config)
    .then(function (response) {
      
      let p; 
      response.data.forEach(
          doc=>{
              var s = doc.value;
              var match = s.split(';')
              p = {name: "1", shape: "rect", coords: [match[0],match[1],match[2],match[3]], preFillColor: "green", fillColor: "blue" , tri:match[4],pt:match[5],rt:match[6],ai:match[7],pa:match[8]} 
              
          }
      )
      data.push(p)
     console.log((data));
                                      
                    setLoading(false)
    })
    .catch(function (error) {
      console.log(error);
    });
    
//for entity 2

var config1 = {
  method: 'get',
  url: 'https://wadiacsi1.cognitonetworks.com/cognito/entityweb/strdatastreamTimeGraph/2202/?entity_id=2202&name=Parking_Inf&start_date=2021-12-31%2011:17:00&end_date=2022-02-07%2007:05:50',
  headers: { 
    'Authorization': 'K9MkyEo5fM0YracivwW3 5xn-c646006da1934235e084 81 111'
  }
};

axios(config1)
.then(function (response) {
  console.log((response.data));
  let p; 
                response.data.forEach(
                    doc=>{
                        var s = doc.value;
                        var match = s.split(';')
                        p = {name: "1", shape: "rect", coords: [match[0],match[1],match[2],match[3]], preFillColor: "green", fillColor: "blue" , tri:match[4],pt:match[5],rt:match[6],ai:match[7],pa:match[8]}
                        
                    }
                )
                data.push(p)
                console.log((data));
                setsp(data)
                
                setLoading(false)
})
.catch(function (error) {
  console.log(error);
});

    },[])
    

  
   const MAP = {
    name: "my-map",
    //{ name: "1", shape: "rect", coords: [sp[0].x1,y,x2,y2], preFillColor: "green", fillColor: "blue" , orderid:"123" }
    areas: sp
  };
  const [hoveredArea, sethoverArea] = useState(null);

const getTipPosition=(area)=> {
  return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
}

const optionsWithLabelChange = {
  closeOnOverlayClick: false,
  labels: {
    confirmable: "Confirm",
    cancellable: "Cancel"
  }
};
const ops = {
  labels: {
    confirmable: "Confirm",
    cancellable: "Cancel"
  }
}
const [obj, setobj] = useState(null);
const [an, setan] = useState("null");

const onClick = async () => {
  
  const result = await confirm(`Do you want to order following asset:${tt}`, ops);
  if (result) {
    var data = { "entityid":"2203",
        "entityName":"Curr_Order1",
            "entityTag":"Generic",
        "gatewayid":"Sub_Assembly_Parking",
            "status":false,
              "datastreams":[{ "name":"Current_Order",
                          "value":`A456_${new Date().toDateString()};A456;${objo.ai};${new Date().toDateString()};Yet to acknowledge;No;${objo.pa}`,
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
    return;
  }
  
};
const [h, seth] = useState("");
const [tr, settr] = useState("");
const optionsWithClonOnOverlayclick = {
  closeOnOverlayClick: true
};
let tt;
let objo
const setchange=(area)=>{
objo=area;
  tt=area.ai;
  console.log(tt);
}
  return(

    Loading?<h3>Loading spots...</h3>:<>
    
    
    <h3>Parking Area</h3>
  <div style={{overflowX:"auto",width:"70%",overflowY:"auto",height:"450px",marginRight:"15%",marginLeft:"15%"}}>
    
    <ImageMapper src={URL} map={MAP} onClick={(area) => {
              setchange(area);
                   
              onClick(optionsWithClonOnOverlayclick);
              
            }} 
            
    onMouseEnter={area => {seth(area.ai)}} />
    
    
    </div>
    

    <h4>Current Asset: {h}</h4>
    </>
  )
}

export default MapperAsse;
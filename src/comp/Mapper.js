import React,{useEffect,useState} from 'react';
import ImageMapper from 'react-img-mapper';
import axios from 'axios';



import Tooltip from '@mui/material/Tooltip';




const clicked=()=>{
  alert("Hello World!");
}
const clickedon=(area)=>{
  console.log(area);
  clicked();
}
  const Mapper = props => {
  const URL = '/parking.jpeg';
  const [h, seth] = useState("");
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
              var col = match[7] == "NULL" ? "red": "green"
              p = {name: "1", shape: "rect", coords: [match[0],match[1],match[2],match[3]], preFillColor: col, fillColor: "blue" , tri:match[4],pt:match[5],rt:match[6],ai:match[7],pa:match[8]}
    
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
                        var col = match[7] == "NULL" ? "red": "green"
                        p = {name: "1", shape: "rect", coords: [match[0],match[1],match[2],match[3]], preFillColor: col, fillColor: "blue" , tri:match[4],pt:match[5],rt:match[6],ai:match[7],pa:match[8]}
  
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
  return { top: "200px", left:"200px"  };
}
  return(

    Loading?<h3>Loading spots...</h3>:<>
    
    
    <h3>Parking Area</h3>
    
      
    
  <div style={{overflowX:"auto",width:"70%",overflowY:"auto",height:"450px",marginRight:"15%",marginLeft:"15%"}}>
  
    <ImageMapper src={URL} map={MAP} onClick={area => alert(area.ai)} 
    onMouseEnter={area => {sethoverArea(area)}} onMouseLeave={area => sethoverArea(null)  }/>

    {
    	hoveredArea &&
    	<span className="tooltip"
    	    style={{ ...getTipPosition(hoveredArea)}}>
    		  { hoveredArea && hoveredArea.name}
    	</span>
    }

    
    
    </div>
    <h4>Current Asset: {h}</h4>
    </>
  )
}

export default Mapper;
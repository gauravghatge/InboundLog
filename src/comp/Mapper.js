import React,{useState} from 'react';
import ImageMapper from 'react-img-mapper';

const clicked=()=>{
  alert("Hello World!");
}
const clickedon=(area)=>{
  console.log(area);
  clicked();
}
  const Mapper = props => {
  const URL = '/parking.jpeg';
  const [x, setx] = useState(27);
  const [y, sety] = useState(36);
  const [x2, setx2] = useState(45);
  const [y2, sety2] = useState(81);

  
  
  
  const MAP = {
    name: "my-map",
    areas: [
      { name: "1", shape: "rect", coords: [x,y,x2,y2], preFillColor: "green", fillColor: "blue" , orderid:"123" }
      
    ]
  };
  
  return(
    <>
    <h3>Parking Area</h3>
  <div style={{overflowX:"auto",width:"70%",overflowY:"auto",height:"450px",marginRight:"15%",marginLeft:"15%"}}>
    
    <ImageMapper src={URL} map={MAP} onClick={area => alert("Order ID -123 , Engine - Maruti")}/>
    </div>
    </>
  )
}

export default Mapper;
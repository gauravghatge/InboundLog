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
  const [x, setx] = useState(35);
  const [y, sety] = useState(40);
  const [x2, setx2] = useState(80);
  const [y2, sety2] = useState(130);

  
  
  
  const MAP = {
    name: "my-map",
    areas: [
      { name: "1", shape: "rect", coords: [x,y,x2,y2], preFillColor: "green", fillColor: "blue" , orderid:"123" }
      
    ]
  };
  
  return <div style={{width:"100%",overflowX:"auto",overflowY:"auto",height:"100vh"}}>
    <ImageMapper src={URL} map={MAP} width={500} onClick={area => alert("Order ID -123 , Engine - Maruti")}/>
    </div>
}

export default Mapper;
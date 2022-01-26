import React, { Component,useState } from 'react'
import ImageMapper from 'react-img-mapper';

 const Parkimg = () => {
     
const initialValue = [
    { id: 0, value: 0 }];

    const [stateOptions, setStateValues] = useState(initialValue);
    const [temp, setTemp] = useState(0);
    const [temp1, setTemp1] = useState(0);
    const [temp0, setTemp0] = useState(1);
    const [dis, setDis] = useState(0);
    const [image, setImage] = useState(null)

const onImageChange = (event) => {
 if (event.target.files && event.target.files[0]) {
   setImage(URL.createObjectURL(event.target.files[0]));
 }
}
const submitted=(e)=>{
  console.log(temp);
  console.log(temp1);
}
const [myArray, setMyArray] = useState([]);
const enterlist=(e)=>{
  
  setMyArray(oldArray => [...oldArray, {temp1,temp}])
  console.log(myArray.length);

  setTemp0(temp0-1)
}


//mapper


const MAP = {
  name: "my-map",
  areas: [
    { name: "1", shape: "rect", coords: [], preFillColor: "green", fillColor: "blue" , orderid:"123" }
    
  ]
};


return (
  <div style={{width:"100vw"}}>
    <input type="file" onChange={onImageChange} className="filetype" />
    
    <input value={temp0} disabled={dis} onChange={event=>setTemp0(event.target.value)}></input>
    <button onClick={e=>{setDis(1)}}>submit</button>
    <ImageMapper src={image} map={MAP} onClick={area => alert("Order ID -123 , Engine - Maruti")}/>    
    {
        (temp0>0)?<><input value={temp} onChange={event=>setTemp(event.target.value)}></input>
        <input value={temp1} onChange={event=>setTemp1(event.target.value)}></input>
        <button onClick={e=>{enterlist(e)} }>submit</button></>:<h3>cannot add more values</h3>

    }
    {
      myArray.map(arr=>{
        console.log(arr);

      })
   
     
 }
    
    
    
    
    
   
  </div>
)
       
    
}

export default Parkimg
import React, { Component,useState } from 'react'

 const Parkimg = () => {
     

    const [image, setImage] = useState(null)

const onImageChange = (event) => {
 if (event.target.files && event.target.files[0]) {
   setImage(URL.createObjectURL(event.target.files[0]));
 }
}

return (
  <div style={{width:"100vw"}}>
    <input type="file" onChange={onImageChange} className="filetype" />
    <img style={{width:"100vw", height:"70vh"}} src={image} alt="preview image" />
  
  </div>
)
       
    
}

export default Parkimg

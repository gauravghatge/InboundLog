// import React, { Component } from 'react'
// import ImageMapper from 'react-img-mapper'


// export default class AssemblyAreaCode extends Component {
    
// map = {
//   name: "my-map",
//   areas: [
//     { name: "1", shape: "poly", coords: [25,33,27,300,128,240,128,94], preFillColor: "green", fillColor: "blue"  },
//     { name: "2", shape: "poly", coords: [219,118,220,210,283,210,284,119], preFillColor: "pink"  },
//     { name: "3", shape: "poly", coords: [381,241,383,94,462,53,457,282], fillColor: "yellow"  },
//     { name: "4", shape: "poly", coords: [245,285,290,285,274,239,249,238], preFillColor: "red"  },
//     { name: "5", shape: "circle", coords: [170, 100, 25 ] },
//   ]
// }

// enterArea(area) {
//     this.setState({ hoveredArea: area });
// }

// leaveArea(area) {
//     this.setState({ hoveredArea: null });
// }

// getTipPosition(area) {
//     return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
// }
    
//     render() {

//         return (
//             <div>
//                 <ImageMapper src={URL} map={maps} width={500}
//     	onLoad={() => this.load()}
//     	onClick={area => this.clicked(area)}
//     	onMouseEnter={area => this.enterArea(area)}
//     	onMouseLeave={area => this.leaveArea(area)}
//     	onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
//     	onImageClick={evt => this.clickedOutside(evt)}
//     	onImageMouseMove={evt => this.moveOnImage(evt)}
//     />
//     {
//     	this.state.hoveredArea &&
//     	<span className="tooltip"
//     	    style={{ ...this.getTipPosition(this.state.hoveredArea)}}>
//     		{ this.state.hoveredArea && this.state.hoveredArea.name}
//     	</span>
//     }
//             </div>
//         )
//     }
// }


import React from 'react';
import ImageMapper from 'react-img-mapper';

const AssemblyAreaCode = props => {
  const URL = './logo1.png';
  const MAP = {
    name: 'my-map',
    // GET JSON FROM BELOW URL AS AN EXAMPLE
    //areas: 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.json',
  };
  
  return <ImageMapper src={URL} map={MAP} />
}

export default AssemblyAreaCode;
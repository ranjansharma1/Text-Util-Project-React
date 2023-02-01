import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode==="light"?"black":"white",
    backgroundColor: props.mode==="light"?"white":"#3d3d3d",
    border: "1px solid",
    borderColor: props.mode==="light"?"black":"white",    
  };


  return (
    <div className="container my-3" >
      <h2 style={{color:"#ff6000"}}>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
              <strong>Restructure your Text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor:'#5e5f607d'}}>
              Text Utils give you a different way to restructire your text and make it most readable.
              It will help you to make your text more readable and easy to read.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor:'#5e5f607d'}}>
              It is totaly Free to Use , So you can take your text and make it easy to read.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle} >
             <strong>Contact Us</strong> 
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" >
            <div className="accordion-body" style={{backgroundColor:'#5e5f607d'}}>
              Name: Ranjan Sharma
              <br/>
              Address: Gate 1, Near hotel Tarachandi, Madras, India-526413 
              <br/>
              Mobile: +918746242167
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

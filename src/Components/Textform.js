import React, { useState } from "react";


export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to UPPERCASE!", "success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!", "success")
  };

  const handleCopy = ()=>{
    const text = document.getElementById("mybox1")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to Clipboard!", "success")

  }

  const handleClearClick = ()=>{
    let newText = " "
    setText(newText);
    props.showAlert("Your text is cleared!", "success")
  }

  
  

  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode ==="dark"?"white":"black"}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==="dark"?"white":"black"}}
            
          id="mybox1"
          rows="10"
        ></textarea>
        <button onClick={handleUpClick} className="btn btn-primary my-2">
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}> Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}> Copy text</button>
        <button className="btn btn-primary mx-4" onClick={handleClearClick}>Clear all</button>
        
      </div>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1 >Your Text summary</h1>
        <p>{text.split(" ").length} Words And {text.length} Characters</p>
        <p>{0.0008 * text.split(" ").length } Minutes To Read this Text</p>
        <h2>PREVIEW</h2>
        <p>{text.length>0?text:"Enter something in textbox to privew it here"}</p>
      </div>
      
    </>
  );
}

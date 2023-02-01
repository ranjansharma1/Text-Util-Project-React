import React, { useState } from "react";

export default function TextForms(props) {
  const [text, setText] = useState("this is default text");

  const handleOnChange = (event) => {
    console.log("handle onChange function clicked");
    setText(event.target.value);
  };

  const handleUpClick = () => {
    console.log("Uppercase button clicked : " + text);
    let upText = text.toUpperCase();
    setText(upText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleDownClick = () => {
    console.log("LowerCase button CLicked : " + text);
    let downText = text.toLowerCase();
    setText(downText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClearClick = () => {
    console.log("Clear button CLicked : " + text);
    let clearText = text.replace(/./g, "");
    console.log("text: " + clearText);
    setText(clearText);
    props.showAlert("Cleared the text", "success");
  };

  const handleCopy = () => {
    console.log("Copy button CLicked : " + text);
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to Clipboard", "success");
  };
  const handleExtraSpace = () => {
    console.log("ExtraSpace button CLicked : " + text);
    let extraSpaceText = text.split(/[ ]+/);
    setText(extraSpaceText.join(" "));
    console.log("text: " + extraSpaceText.join(" "));
    props.showAlert("ExtraSpace Text Copied", "success");
  };

  // const changeColor = {
  //   color: "black",
  //   backgroundColor:"white",

  // };

  return (
    <div
      className={`container  text-${props.mode === "light" ? "dark" : "light"}`}
    >
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            // 2 curly braces for writing object properties
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="mybox"
            rows="8"
            onChange={handleOnChange}
            value={text}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleDownClick}>
          Convert to lowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleExtraSpace}>
          remove Extra spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleCopy}>
          copy
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleClearClick}>
          clear
        </button>
      </div>
      <div className="container">
        <p>
          Character Count: {text.replace(/\s/g, "").length} | Word Count:{text.split(" ").filter((elem)=>{return elem.length!==0}).length} | Line Count: {text.split("\n").filter((elem)=>{return elem.length!==0}).length}
        </p>
        <p>{0.008 * text.split(" ").filter((elem)=>{return elem.length!==0}).length} minute read time</p>
        <h3>Preview </h3>
        <p>{text.length>0?text:"Nothing to Preview!!!"}</p>
      </div>
    </div>
  );
}

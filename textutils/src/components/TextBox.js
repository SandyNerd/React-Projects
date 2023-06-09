import React,{useState} from "react";

export default function TextBox(props) {
  const handleUpClick = () =>{
    let newText = text.toUpperCase()
    setText(newText)
  }
  
  const handleLoClick = () =>{
    let newText = text.toLowerCase()
    setText(newText)
  }
  const handleClrClick = () =>{
    setText('')
  }
  const handleCopyClick = () =>{
    var text = document.getElementById("myBox")
    text.select()
    text.setSelectionRange(0,9999999);
    navigator.clipboard.writeText(text.value)
  }
  const handleOnChange = (event) =>{
    setText(event.target.value)
  }
 
  const [text, setText] = useState(""); 
  return (
    <>
     <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>      
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8">
        </textarea>
      </div>
      {/* <button className="btn.btn-primary">Convert to Uppercase</button> */}
      <button type="button" className="btn btn-primary " onClick={handleUpClick}>Convert to Uppercase</button>
      <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button type="button" className="btn btn-primary mx-2" onClick={handleClrClick}>Clear Text</button>
      <button type="button" className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h1>Text Preview</h1>
      <p>{text.length>0?text:"Please enter something to preview"}</p>
    </div>
    </>
   
  );
}

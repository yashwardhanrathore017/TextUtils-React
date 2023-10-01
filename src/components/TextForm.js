import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick =()=>{
        //console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();

        setText(newText);
        props.showAlert("converted to uppercase", "success");
    }

    const handleLowClick =()=>{
        let newText=text.toLowerCase();

        setText(newText);
        props.showAlert("converted to lowercase", "success");
    }

    const handleClearClick =()=>{
        let newText="";
        setText(newText);
        props.showAlert("cleared", "success");
    }

    const handleReverseClick=()=>{
        let newText=text.split("").reverse().join("");
        setText(newText);
        props.showAlert("reversed", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleOnChange =(event)=>{
        //console.log("on change");
        setText(event.target.value);
    }
  const [text, setText] = useState('Enter text here');
  // setText("newText");
  return (
    <>
    <div className="container" style= {{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">  
        <textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Covert to UPPERCASE</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
    <button className="btn btn-primary mx-2" onClick={handleReverseClick}>reverse words</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
       
    </div>

    <div className="container my-2" style= {{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}

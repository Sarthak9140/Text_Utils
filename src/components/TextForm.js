import React , {useState}from 'react'

export default function TextForm(props) {

    const handleUpClick =() =>{
        // console.log("uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!" , "success");
    }
    const handleDownClick =() =>{
        // console.log("uppercase was clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!" , "success");
    }
    const handleClearClick =() =>{
        let newText = '';
        setText(newText)
        props.showAlert("Clear the text!" , "success");
    }

    const handleonChange =(event) =>{
        // console.log("on change")
        setText(event.target.value)

    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy the entire text" , "success");
    }

    const handleRemove = () => {
        let newText = text.split(/[ ] +/);
        setText(newText.join(" "))
        props.showAlert("Remove extra spaces" , "success");
    }

    const [text , setText] = useState('');

    return (
        <>
    <div className="container"style ={{color:props.mode ==='dark'?'white':'#042743'}}>
        <h1 >{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonChange} style ={{backgroundColor:props.mode ==='dark'?'grey':'white' , color:props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="9"></textarea>
    </div>
    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleRemove}>Remove Extra Spaces</button>
    
    </div>
    <div className="container my-3" style ={{color:props.mode ==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary </h1>
        <p>{text.split(" ").filter((element) =>{return element.length !==0}).length} words and {text.length}characters</p>
        <p> {0.008*text.split(" ").length} minutes to read </p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text:"enter something in the textbox to preview it here....."}</p>
    </div>
    </>
  )
}

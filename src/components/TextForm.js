import React , {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('Enter your text here');
    const convertToUpper =()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const convertToLower =()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const clearText =()=>{
        let newText="";
        setText(newText)
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange =(event)=>{
        console.log("onChangeClicked")
        setText(event.target.value)
    }
  return (
     <>
    <div className='container'>
    <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={convertToUpper}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={convertToLower}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={clearText}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
    </div>
    <div className="container my-3">
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </> 
  )
}

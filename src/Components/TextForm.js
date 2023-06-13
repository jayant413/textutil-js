import React,{useState} from 'react'

export default function TextForm(props) {
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","success ")
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase","success ")
  }

  const handleClearClick = () => {
    setText("")
    props.showAlert("Text cleared","success ")
  }

  const handleCopy = ()=>{
    let t = document.getElementById("myBox")
    t.select()
    navigator.clipboard.writeText(t.value)
    props.showAlert("Text copied","success ")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert(" Spaces removed","success")
  }


// textarea

  const handleOnChange =(event) => {
    setText(event.target.value)
  }

  const[text,setText] = useState('');

  // setText("new text");                    //correct way to change the state


  


  // return statement

  return (
    <>
  <div  style={{color : props.mode==='light'?'black':'white'}}>
    <h1>{props.heading}</h1>

  <div className="mb-3">
    <textarea className="form-control" style={{backgroundColor : props.mode==='light'?'white':'#141619' , color : props.mode==='light'?'black':'white'}} id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
  </div >

<button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0}  className="btn btn-warning mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
<button disabled={text.length===0}  className="btn btn-secondary mx-1 my-1" onClick={handleClearClick}>Clear All</button> 
<button disabled={text.length===0}  className="btn btn-success mx-1 my-1" onClick={handleCopy}>Copy text</button>
<button disabled={text.length===0}  className="btn btn-info mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button> 

  </div>
  <div className="container" style={{color : props.mode==='light'?'black':'white'}}>

      <h2>Text Summary</h2>

      <p>words {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} character {text.length}  <br />
      {0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes taken to read</p>

      <h3>Preview</h3>
      <p>{text.length>0? text:"Nothing to preview"}</p>

  </div>

</>
  )
}

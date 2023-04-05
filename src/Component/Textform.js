import React from 'react'
import { useState } from 'react'
export default function Textform(props) {
    const handleUpclick= ()=>{
         
          let newText=text.toUpperCase();
          setText(newText)
          props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoclick= ()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }

    
    const handleonChange= (event)=>{
          
          setText(event.target.value)
    }

      const[text,setText]=useState('');
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode==='dark'?'#13466e': 'white',color: props.mode==='dark'?'white':'#042743'}} id="my box" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLoclick}>Convert to Lowercase</button>
        </div>
        
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
             <h2>Your text summary</h2>
             <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
             <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read </p>
             <h2>Preview</h2>
             <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            

        </div>
        </>
    )
}

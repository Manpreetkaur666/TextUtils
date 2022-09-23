// rfc
import React,{useState} from 'react'
// impt
// import PropTypes from 'prop-types'


export default function TextForm(props) {

    const upperCaseClickBtn = ()=>{
        // console.log("Uppercase Button was clicked!")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is successfully converted to uppercase!")
    }
    const lowerCaseClickBtn = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text is successfully converted to lowecase!")
    }

    const clearBtn = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text is cleared!")
    }

    const copyBtn = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is successfully copied!")
    }

    const titleCaseBtn = ()=>{
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Text is successfully converted to Title Case!")
    }

    const rmvExtraSpaceBtn = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Successfully removed extra Spaces!")
    }

    const handleOnChange =(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }

    // This is hook help to create variable of state
    const [text, setText] = useState("");

  return (
    <>
   <div className="mb-3 my-3 container">
     <h1>{props.heading}</h1>
     <textarea className="form-control" placeholder='Enter your text here!' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
     <button className='btn btn-primary my-3 mx-1' onClick={upperCaseClickBtn}>Convert to Uppercase</button>
     <button className='btn btn-primary my-3 mx-1' onClick={lowerCaseClickBtn}>Convert to LowerCase</button>
     <button className='btn btn-primary my-3 mx-1' onClick={clearBtn}>Clear</button>
     <button className='btn btn-primary my-3 mx-1' onClick={copyBtn}>Copy</button>
     <button className='btn btn-primary my-3 mx-1' onClick={titleCaseBtn}>Covert to Title Case</button>
     <button className='btn btn-primary my-3 mx-1' onClick={rmvExtraSpaceBtn}>Remove Extra Space</button>
   </div>
   <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
    <h3>Your text Summary!</h3>
    <p>{text.split(" ").length} words and {text.length} characters.</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Pleas Enter your text above to Preview."}</p>
   </div>
  </>
  )
}


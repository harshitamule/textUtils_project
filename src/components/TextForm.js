import React, {useState} from "react";

function TextForm(props){
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btnText, setBtnText] = useState("change to dark")
    // const mode= () => {
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("change to light")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("change to dark")
    //     }
        
    // }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLoClick =() =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")

    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("text has been cleared", "success")

    }

    const [text, setText] = useState('');

    let myColor ={
        backgroundColor: props.mode==='dark'? 'rgb(69 74 79)': 'rgb(238 241 245)',
        color: props.mode==='dark'? 'white': 'black',
        border: 'none'
    }

    return(
        <div>
            <div className="container my-3">
                <h3>{props.heading}</h3>
                <div className="mb-3 ">
                    <textarea className="form-control" id="myBox" value={text} 
                        onChange={handleOnChange} rows="8" style={myColor}></textarea>
                </div>
                
                <button disabled= {text.length===0} className={`btn btn-outline-${props.mode==='dark'?'light' : 'dark'} me-2`} onClick={handleUpClick}>Convert To Uppercase</button>
                <button disabled= {text.length===0} className={`btn btn-outline-${props.mode==='dark'?'light' : 'dark'} me-2`} onClick={handleLoClick}>Convert To Lowercase</button>
                <button disabled= {text.length===0} className={`btn btn-outline-${props.mode==='dark'?'light' : 'dark'} me-2`} onClick={handleClearClick}>Clear</button>

                <div className="conatainer my-3">
                <h3>Your Text Summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length}</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>

            </div>
            
            {/* <button className="btn btn-success" onClick={mode}>{btnText}</button> */}
            
        </div>
    )
}

export default TextForm;
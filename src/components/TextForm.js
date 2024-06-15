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
    }
    const handleLoClick =() =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
    }

    const [text, setText] = useState('');

    return(
        <div>
            <div className="container ">
                <h3>{props.heading}</h3>
                <div className="mb-3 ">
                    <textarea className="form-control bg-body-tertiary border-2" id="myBox" value={text} onChange={handleOnChange} rows="8" ></textarea>
                </div>
                
                <button className="btn btn-success me-2" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-success me-2" onClick={handleLoClick}>Convert To Lowercase</button>
                <button className="btn btn-success" onClick={handleClearClick}>Clear</button>

            </div>
            <div className="conatainer my-3 mx-2">
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} words and {text.length}</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
            {/* <button className="btn btn-success" onClick={mode}>{btnText}</button> */}
            
        </div>
    )
}

export default TextForm;
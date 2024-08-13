import React from "react";

<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
    <symbol id="check-circle-fill" viewBox="0 0 16 16" height="20px" width="20px">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </symbol>
</svg>

let alertStyle={
    height: '50px',
    width: '300px',
    position: 'fixed',
    bottom: '30px',
    right: '20px',
    // 'z-index' : '1050'
}

function Alert(props){
    return(
        <div style={alertStyle}>
            {props.Alert && (<div class={`alert alert-${props.Alert.type} align-items-center`} role="alert">
                <strong>{props.Alert.type}</strong>: {props.Alert.msg}
            </div>)}
        </div>
    )
}
export default Alert;
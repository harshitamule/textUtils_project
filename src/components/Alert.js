import React from "react";

function Alert(props){
    return(
        props.Alert && <div class={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.Alert.type}</strong>: {props.Alert.msg}
        </div>
    )
}
export default Alert;
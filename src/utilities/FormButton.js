import React from 'react';
import {Link} from 'react-router-dom';

function FormButton(props) {
    return (
        <button onClick={props.handler} to={props.path} style={{
            background:"#19AAE6",
            borderRadius:"14px",
            textDecoration:"none",
            color:"white",
            fontFamily:"Roboto",
            fontSize:"16px",
            paddingTop:"10px",
            paddingBottom:"10px",
            paddingLeft:"10px",
            paddingRight:"10px",
            maxWidth: "240px",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            cursor:"pointer",
            border:"none",
            marginTop:"20px",
            marginBottom:"12px",
            }} >
            {props.text}
        </button>
    )
}

export default FormButton

import React from 'react';
import { Link } from 'react-router-dom';

function DashboardNavLink(props){
    return(
        <Link to={props.path} style={{display:"flex",width:"100%",marginBottom:"36px",textDecoration:"none",color:"#2F2F2F"}}>
            <img style={{width:"18px",marginRight:"18px"}} src={props.img} alt="img"/>
            <p style={{fontSize:"16px",fontFamily:"Mali",fontWeight:"500"}}>{props.name}</p>
        </Link>
    );
}

export default DashboardNavLink;
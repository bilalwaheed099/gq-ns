import React from 'react';
import 'utilities.css';

const PrimaryHeading = (props) => {
    return(
        <h1 className="primary-heading">{props.text}</h1>
    );
}

export default PrimaryHeading;
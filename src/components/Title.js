import React from "react";

const Title = props => {
    return (
        <header className="w3-container w3-center w3-padding-32">
            <h1 style={{color:props.color, fontSize:props.size}}><b>{props.text}</b></h1>
            <p>Welcome to the <span className="w3-tag">{props.text}</span></p>
        </header>
    )
}

export default Title;
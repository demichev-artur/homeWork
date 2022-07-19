import React from "react";

const Card = props => {
    return (
        <div className="w3-card-4 w3-margin w3-white">
            <img src={props.img} alt={props.alt}/>

    <div className="w3-container">
        <h3><b>{props.titleH3}</b></h3>
        <h5>Title description, <span className="w3-opacity">{props.date}</span></h5>
    </div>

    <div className="w3-container">
        <p>{props.text}</p>
        <div className="w3-row">
            <div className="w3-col m8 s12">
                <p>
                    <button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button>
                </p>
            </div>
            <div className="w3-col m4 w3-hide-small">
                <p><span className="w3-padding-large w3-right"><b>Comments  </b> <span
                    className={props.clsComments}>{props.comments}</span></span></p>
            </div>
        </div>
    </div>

    </div>
    )
}


export default Card;